import React, { useState, useEffect } from 'react';
import PriceSlider, { formatValue } from './PriceSlider';

interface Usage {
  // Search & Vector DB
  chunksStored: number;
  searchesSent: number;
  messagesSent: number;
  writesPerMo: number;
  // Data Ingestion
  pagesCrawled: number;
  ocrPages: number;
  fileStoredGb: number;
  // Analytics
  analyticsEvents: number;
  // Platform fee
  datasets: number;
  users: number;
  componentLoads: number;
};

interface Assumptions {
  averageSparseSize: number; // Used for writes per month and vector storage
  vectorDimension: number; // Used for writes per month and vector storage
  averagePayloadSizeBytes: number; // Used for writes per month
  tokensPerSearch: number; // Used for searches per month
  tokensPerMessage: number; // Used for messages per month
  tokensPerChunk: number; // Used for writes per month
  tokensPerPage: number; // Used for pdf2md
};

interface Costs {
  name: string;
  price: number;
};

interface CostItem {
  name: string;
  tooltip: string;
  total: number;
  breakdown: Costs[];
  amount: number;
  unit: string;
};

const defaultUsage: Usage = {
  chunksStored: 1_000,
  messagesSent: 1_000,
  searchesSent: 1_000,
  fileStoredGb: 5,
  pagesCrawled: 10,
  writesPerMo: 10_000,
  analyticsEvents: 100_000,
  ocrPages: 100,
  componentLoads: 1_000,
  datasets: 10,
  users: 5,
};

const defaultAssumptions: Assumptions = {
  averageSparseSize: 256, // Used for writes per month and vector storage
  vectorDimension: 1536, // Used for writes per month and vector storage
  averagePayloadSizeBytes: 2000, // Used for writes per month
  tokensPerSearch: 12.65, // Used for searches per month
  tokensPerMessage: 26.3, // Used for messages per month
  tokensPerChunk: 300, // Used for writes per month
  tokensPerPage: 800, // Used for pdf2md
};

const calculateUsageCost = (usage: Usage, assumptions: Assumptions) => {
  // First 1000 chunks are free.
  const storagePerChunk = ((assumptions.averageSparseSize * 4) + (assumptions.vectorDimension * 4) + assumptions.averagePayloadSizeBytes);
  const storageUsedBytes = Math.max(0, usage.chunksStored - 1000) * storagePerChunk;
  // First 10,000 searches are free.
  const searchTokens = usage.searchesSent * assumptions.tokensPerSearch;
  const searchTokensCalc = Math.max(0, usage.searchesSent - 10_000) * assumptions.tokensPerSearch;
  // First 1,000 messages are free.
  const messageTokens = usage.messagesSent * assumptions.tokensPerMessage;
  const messageTokensCalc = Math.max(0, usage.messagesSent - 1_000) * assumptions.tokensPerMessage;
  // First 10,000 writes are free.
  const writeTokens = usage.writesPerMo * assumptions.tokensPerChunk;
  const writeTokensCalc = Math.max(0, usage.writesPerMo - 10_000) * assumptions.tokensPerChunk;

  let costs = {

    // Vector / Search costs
    vectorStorageGB: storagePerChunk * usage.chunksStored / 1_000_000_000,
    // Cost / mo / GB is $10.1675 per GB. (including margin)
    vectorDBRamCost: storageUsedBytes / 1_000_000_000 * 10.1675,
    // Cost / mo / GB is $0.42 / GB. (including margin)
    vectorDbStorageCost: storageUsedBytes / 1_000_000_000 * (0.42 + 1),
    // Cost / search token = $0.04 * 5 per token. (including margin)
    searchTokens,
    searchCost: searchTokensCalc * 0.20 / 1_000_000,
    // Cost / chat token = $2.52 * 1.4 per 1M token. (including margin)
    messageTokens,
    messageCost: messageTokensCalc * 2.52 * 1.4 / 1_000_000,
    // Ingest charge is $0.02 * 1.4 per 1M token
    writeTokens,
    writesCost: writeTokensCalc * 0.02 / 1_000_000,
    // First 5 datasets are free
    datasetCost: Math.max(0, usage.datasets - 10) * 0.05,
    scrapeCost: Math.max(0, usage.pagesCrawled - 10) * 0.00086,

    // Analytics Costs
    // First 100,000 events are free
    analyticsCost: Math.max(0, usage.analyticsEvents - 100_000) * 0.0001,

    // Ingestion Costs
    // File storage cost is $0.023 / GB
    fileStorageCost: Math.max(0, usage.fileStoredGb - 10) * 0.023,
    // First 100 ocr pages are free
    ocrCost: Math.max(0, usage.ocrPages - 100) * 0.01,
    componentCost: Math.max(0, usage.componentLoads - 1_000) * 0.01,
    userCost: Math.max(0, usage.users - 5) * 5,
    total: 0
  };

  costs.total = costs.searchCost + costs.messageCost + costs.writesCost + costs.datasetCost + costs.scrapeCost + costs.analyticsCost + costs.fileStorageCost + costs.ocrCost + costs.componentCost + costs.userCost;
  return costs;
}

// Format currency
const formatCurrency = (amount: number) => {
  if (amount === 0) return '$0.00';
  if (amount < 0.01 && amount > 0) {
    return '$' + amount.toFixed(6);
  }
  return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};


const PricingCalculatorTwo = () => {

  const [usage, setUsage] = useState<Usage>(defaultUsage);
  const [assumptionsUsed, setAssumptionsUsed] = useState<Assumptions>(defaultAssumptions);

  // New state to track individual cost items
  const [costItems, setCostItems] = useState<CostItem[]>([]);

  useEffect(() => {
    const cost = calculateUsageCost(usage, assumptionsUsed);

    setCostItems([
      {
        name: "Vectors",
        tooltip: "Vector dimension and payload size may vary",
        total: cost.vectorDBRamCost + cost.vectorDbStorageCost,
        breakdown: [
          {
            name: "RAM Cost",
            price: cost.vectorDBRamCost,
          },
          {
            name: "Storage Cost",
            price: cost.vectorDbStorageCost,
          }
        ],
        amount: cost.vectorStorageGB,
        unit: "GBs stored",
      },
      {
        name: "Queries",
        tooltip: "Assuming 300 average tokens / chunk",
        total: cost.searchCost + cost.messageCost,
        breakdown: [
          {
            name: "Search",
            price: cost.searchCost,
          },
          {
            name: "Messages",
            price: cost.messageCost,
          },
        ],
        amount: cost.searchTokens + cost.messageTokens,
        unit: "tokens processed",
      },
      {
        name: "Writes",
        tooltip: "Assuming 300 average tokens / chunk",
        total: cost.writesCost,
        breakdown: [],
        amount: cost.writeTokens,
        unit: "tokens writes",
      },
      {
        name: "Web Scrape",
        tooltip: "Number of pages crawled",
        total: cost.scrapeCost,
        breakdown: [],
        amount: usage.pagesCrawled,
        unit: "Pages crawled",
      },
      {
        name: "Files",
        tooltip: "",
        total: cost.fileStorageCost + cost.ocrCost,
        breakdown: [
          {
            name: `File OCR (${usage.ocrPages} pages)`,
            price: cost.ocrCost
          },
          {
            name: `File Storage (${usage.fileStoredGb} GB)`,
            price: cost.fileStorageCost
          },
        ],
        amount: 0,
        unit: "",
      },
      {
        name: "Platform",
        tooltip: "Number of component loads",
        total: cost.componentCost + cost.analyticsCost + cost.datasetCost + cost.userCost,
        breakdown: [
          {
            name: `${formatValue(usage.analyticsEvents)} Analytics Events`,
            price: cost.analyticsCost
          },
          {
            name: `${usage.datasets} Datasets`,
            price: cost.datasetCost
          },
          {
            name: `${usage.users} Users`,
            price: cost.userCost
          },
          {
            name: `Component (${formatValue(usage.componentLoads)} loads)`,
            price: cost.componentCost
          },
        ],
        amount: 0,
        unit: "",
      },
    ])

    setTotal({
      price: cost.total,
      usageDiscount: 0
    });
  }, [usage, assumptionsUsed]);

  const [total, setTotal] = useState({
    price: 0,
    usageDiscount: 0,
  });
  const [activeTab, setActiveTab] = useState('search'); // Tab for product categories

  // Handle usage input change
  const handleUsageChange = (product, value) => {
    setUsage((prev) => ({
      ...prev,
      [product]: parseInt(value, 10) || 0,
    }));
  };

  const handleAssumptionsChange = (product, value) => {
    setAssumptionsUsed((prev) => ({
      ...prev,
      [product]: parseInt(value, 10) || 0,
    }))
  };

  return (
    <div className="max-w-7xl mx-auto text-black dark:text-white rounded-xl shadow-md overflow-hidden mt-2">
      <div className="text-3xl font-bold px-6 pt-6 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-3 text-fuchsia-800 dark:text-fuchsia-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        <h3 id="trieve-cloud-pricing">
          Pricing calculator
        </h3>
        <p className="text-sm font-thin pl-2 self-end">Trieve Cloud Pricing</p>
      </div>

      {/* Main tab navigation */}
      <div className="border-b border-gray-800">
        <div className="flex overflow-x-auto scrollbar-hide dark:text-gray-400 dark:hover:dark:text-gray-300">
          <button
            onClick={() => setActiveTab('search')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'search' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400' : ''}`}
          >
            Storage
          </button>
          <button
            onClick={() => setActiveTab('ingestion')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'ingestion' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400' : ''}`}
          >
            Ingestion
          </button>
          <button
            onClick={() => setActiveTab('infrastructure')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'infrastructure' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400' : ''}`}
          >
            Platform + Analytics
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Usage calculator */}
        <div className="w-full md:w-3/4 p-6 border-b md:border-b-0 md:border-r border-gray-800">

          <div className="space-y-10">
            {/* Search Tab Content */}
            {activeTab === 'search' && (
              <>
                <div className='flex space-x-4'>
                  <div className='w-full'>
                    <label
                      htmlFor="frequency"
                      className="block text-gray-700 mb-1 dark:text-gray-300"
                    >
                      Vector Dimension
                    </label>
                    <select
                      id="frequency"
                      className="block w-full px-7 py-2 rounded-md dark:text-gray-300 dark:bg-gray-800"
                      defaultValue="768"
                      value={assumptionsUsed.vectorDimension}
                      onChange={(e) => handleAssumptionsChange('vectorDimension', e.target.value)}
                    >
                      <option value="768">768</option>
                      <option value="1024">1024</option>
                      <option value="1536">1536</option>
                      <option value="3072">3072</option>
                    </select>
                  </div>

                  <div className='w-full'>
                    <label
                      htmlFor="frequency"
                      className="block text-gray-700 mb-1 dark:text-gray-300 "
                    >
                      Payload Size
                    </label>
                    <select
                      id="frequency"
                      className="block w-full px-7 py-2 border rounded-md shadow-sm dark:bg-gray-800"
                      defaultValue="1536"
                      value={assumptionsUsed.averagePayloadSizeBytes}
                      onChange={(e) => handleAssumptionsChange('averagePayloadSizeBytes', e.target.value)}
                    >
                      <option value="512">512 bytes</option>
                      <option value="1024">1 KB</option>
                      <option value="4096">4 KB</option>
                      <option value="8192">8 KB</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-xl font-medium">Chunks Stored</h3>
                    <p className='text-sm'>First 1,000 chunks are free!</p>
                  </div>
                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={1000}
                        max={1_000_000_000}
                        markers={[1_000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000, 1_000_000_000]}
                        defaultValue={usage.chunksStored}
                        beforeValueText=""
                        afterValueText="chunks"
                        onChange={(value) => handleUsageChange('chunksStored', value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-xl font-medium">Searches / month</h3>
                    <p className='text-sm'>First 10,000 searches are free!</p>
                  </div>
                  <PriceSlider
                    min={10_000}
                    max={100_000_00000}
                    markers={[10_000, 100_000, 1_000_000, 1_000_000, 10_000_000, 100_000_000, 100_000_0000, 100_000_00000]}
                    defaultValue={usage.searchesSent}
                    beforeValueText=""
                    afterValueText="searches"
                    onChange={(value) => handleUsageChange('searchesSent', value)}
                  />
                </div>
                <div className="mb-6">
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-lg font-medium">Messages / month</h3>
                    <p className='text-sm'>First 1,000 messages are free!</p>
                  </div>
                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={1_000}
                        max={100_000_000}
                        markers={[1_000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000]}
                        defaultValue={usage.messagesSent}
                        beforeValueText=""
                        afterValueText="messages"
                        onChange={(value) => handleUsageChange('messagesSent', value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-lg font-medium">Writes / month</h3>
                    <p className='text-sm'>First 10,000 writes are free!</p>
                  </div>
                  <PriceSlider
                    min={10_000}
                    max={100_000_000}
                    markers={[10_000, 100_000, 1_000_000, 10_000000, 10_0000000]}
                    defaultValue={usage.writesPerMo}
                    beforeValueText=""
                    afterValueText="writes"
                    onChange={(value) => handleUsageChange('writesPerMo', value)}
                  />
                </div>
              </>
            )}
            {/* Data Ingestion Tab Content */}
            {activeTab === 'ingestion' && (
              <>
                <div className="mb-6">
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-lg font-medium">Website Crawler</h3>
                    <p className='text-sm'>First 10 pages are free!</p>
                  </div>
                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={10}
                        max={100000}
                        markers={[10, 100, 1000, 10000, 100000, 1000000, 10000000]}
                        defaultValue={usage.pagesCrawled}
                        beforeValueText="Crawling"
                        afterValueText="web pages per month"
                        onChange={(value) => handleUsageChange('pagesCrawled', value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-lg font-medium">OCR Processing</h3>
                    <p className='text-sm'>First 100 pages are free!</p>
                  </div>
                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={100}
                        max={100000}
                        markers={[100, 1000, 10000, 100000, 1000000, 10000000]}
                        defaultValue={usage.ocrPages}
                        beforeValueText=""
                        afterValueText="pages"
                        onChange={(value) => handleUsageChange('ocrPages', value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-lg font-medium">File Storage</h3>
                    <p className='text-sm'>First 10GB are free!</p>
                  </div>
                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={10}
                        max={1000000}
                        markers={[10, 100, 1000, 10000, 100000, 1000000]}
                        defaultValue={usage.fileStoredGb}
                        beforeValueText=""
                        afterValueText="GB(s) of files"
                        onChange={(value) => handleUsageChange('fileStoredGb', value)}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Infrastructure Tab Content */}
            {activeTab === 'infrastructure' && (
              <>
                <h3 className="text-lg font-medium mb-4">Platform</h3>
                <div>
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-lg font-medium">Datasets</h3>
                    <p className='text-sm'>First 10 datasets free!</p>
                  </div>

                  <div className="relative">
                    <PriceSlider
                      min={9}
                      max={10_000}
                      markers={[10, 15, 50, 100, 1_000, 5_000, 10_000]}
                      defaultValue={usage.datasets}
                      beforeValueText="Using"
                      afterValueText="datasets"
                      onChange={(value) => handleUsageChange('datasets', value)}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className=" dark:text-gray-300">Users</label>
                  </div>
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-lg font-medium">Users</h3>
                    <p className='text-sm'>First 5 users free!</p>
                  </div>

                  <div className="relative">
                    <PriceSlider
                      min={5}
                      max={50}
                      markers={[5, 7, 10, 15, 20, 25, 50]}
                      defaultValue={usage.users}
                      beforeValueText="With"
                      afterValueText="users"
                      onChange={(value) => handleUsageChange('users', value)}
                    />
                  </div>
                </div>

                <div>
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-lg font-medium">Analytics</h3>
                    <p className='text-sm'>First 100k events free!</p>
                  </div>

                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={10_00_00}
                        max={100_000_000_000}
                        markers={[100_000, 1_000_000, 1_000_000, 10_000_000, 100_000_000, 1_000_000_000, 10_000_000_000, 100_000_000_000]}
                        defaultValue={usage.analyticsEvents}
                        beforeValueText="Tracking"
                        afterValueText="analytics events"
                        onChange={(value) => handleUsageChange('analyticsEvents', value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className='flex space-x-2 mb-4 items-end'>
                    <h3 className="text-lg font-medium">Search Component Loads</h3>
                    <p className='text-sm'>First 1k loads free!</p>
                  </div>

                  <div className="relative">
                    <PriceSlider
                      min={1000}
                      max={10000000}
                      markers={[1000, 10000, 100000, 1000000, 10000000]}
                      defaultValue={usage.componentLoads}
                      beforeValueText="With"
                      afterValueText="component loads"
                      onChange={(value) => handleUsageChange('componentLoads', value)}
                    />
                  </div>
                </div>

              </>
            )}
          </div>
        </div>

        {/* Line items section */}
        <div className="w-full md:w-1/4 p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-fuchsia-800 dark:text-fuchsia-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Line Items
          </h3>

          {/* Display active cost items */}
          <div className="space-y-4 overflow-y-auto pr-2">
            {costItems.map((item, index) => (
              <div key={index} className="border-b border-gray-700 pb-3">
                <div className='flex justify-between'>
                  <span className="text-xl font-medium">{item.name}</span>
                  {item.total > 0 ?
                    <span className="">Total <span className="font-medium">{formatCurrency(item.total)}</span></span>
                    : <div>FREE</div>
                  }
                </div>
                {item.amount > 0 &&
                  <div className="text-sm dark:text-gray-400 text-gray-700 mb-3">
                    {formatValue(item.amount)} {item.unit}
                  </div>}
                {item.total > 0 && item.breakdown.map((breakdownItem, index) => (
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{breakdownItem.name}</span>
                    <div className='flex flex-col justify-end items-end'>
                      <span className="text-sm font-medium">{formatCurrency(breakdownItem.price)}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {costItems.length === 0 && (
              <div className="text-gray-400 italic">No charges yet. Adjust the sliders to see cost breakdown.</div>
            )}
          </div>
        </div>
      </div>

      {/* Total section */}
      <div className="border-t border-gray-800 p-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Estimated total</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">for all products & add-ons</p>
          </div>
          <div className='flex flex-col align-end'>
            {total.price > 0 ? (
              <div className="text-3xl font-bold mt-4 md:mt-0">
                {formatCurrency(total.price + total.usageDiscount)}{' '}
                <span className="text-sm font-normal text-gray-600 dark:text-gray-400">/ month</span>
              </div>
            ) : (
              <div className="text-3xl font-bold mt-4 md:mt-0">
                FREE!
              </div>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-primary text-white hover:bg-fuchsia-700 py-2 px-6 rounded-lg font-medium transition duration-200">
              Get started free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculatorTwo;
