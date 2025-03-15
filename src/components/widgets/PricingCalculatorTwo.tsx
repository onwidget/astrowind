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
  analyticsStored: number;
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
  chunksStored: 500_000,
  messagesSent: 10_000,
  searchesSent: 10_000,
  fileStoredGb: 5,
  pagesCrawled: 10_000,
  writesPerMo: 1_000_000,
  analyticsEvents: 100_000,
  analyticsStored: 100_000,
  ocrPages: 1_000,
  componentLoads: 10_000,
  datasets: 2,
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
  const storageUsedBytes = usage.chunksStored * ((assumptions.averageSparseSize * 4) + (assumptions.vectorDimension * 4) + assumptions.averagePayloadSizeBytes);
  const searchTokens = usage.searchesSent * assumptions.tokensPerSearch;
  const messageTokens = usage.messagesSent * assumptions.tokensPerSearch;
  const writeTokens = usage.writesPerMo * assumptions.tokensPerChunk;


  return {

    // Vector / Search costs
    vectorStorageGB: storageUsedBytes / 1_000_000_000,
    // Cost / mo / GB is $10.1675 per GB. (including margin)
    vectorDBRamCost: storageUsedBytes / 1_000_000_000 * 10.1675,
    // Cost / mo / GB is $0.42 / GB. (including margin)
    vectorDbStorageCost: storageUsedBytes / 1_000_000_000 * 0.42,
    // Cost / search token = $0.04 * 5 per token. (including margin)
    searchTokens,
    searchCost: searchTokens * 0.20 / 1_000_000,
    // Cost / chat token = $1.91 * 1.4 per 1M token. (including margin)
    messageTokens,
    messageCost: messageTokens * 1.91 * 1.4 / 1_000_000,
    // Ingest charge is $0.02 * 1.4 per 1M token
    writeTokens: writeTokens,
    writesCost: writeTokens * 0.02 / 1_000_000,
    datasetCost: usage.datasets * 0.05,

    // Analytics Costs

    analyticsCost: usage.analyticsEvents * 0.01,
    analyticsStorageCost: usage.analyticsStored * 0.01,

    // Ingestion Costs
    // File storage cost is $0.023 / GB
    fileStorageCost: usage.fileStoredGb * 0.023,
    ocrCost: usage.ocrPages * 0.01,
    componentCost: usage.componentLoads * 0.01,
    userCost: usage.users * 5
  };
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
        name: "Vector Storage",
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
        name: "Writes",
        tooltip: "Assuming 300 average tokens / chunk",
        total: cost.writesCost,
        breakdown: [],
        amount: cost.writeTokens,
        unit: "tokens written",
      },
      {
        name: "Queries",
        tooltip: "Assuming 300 average tokens / chunk",
        total: cost.searchCost + cost.messageCost,
        breakdown: [
          {
            name: "Messages",
            price: cost.messageCost,
          },
          {
            name: "Search",
            price: cost.searchCost,
          }
        ],
        amount: cost.searchTokens + cost.messageTokens,
        unit: "tokens processed",
      },
      {
        name: "Files",
        tooltip: "",
        total: cost.fileStorageCost,
        breakdown: [{
          name: `File Storage (${usage.fileStoredGb} GB)`,
          price: cost.fileStorageCost
        },
        {
          name: `File OCR (${usage.ocrPages} pages)`,
          price: 0
        }
        ],
        amount: 0,
        unit: "",
      },
      {
        name: "Web Scrape",
        tooltip: "Number of pages crawled",
        total: cost.fileStorageCost,
        breakdown: [],
        amount: usage.pagesCrawled,
        unit: "Pages crawled",
      },
      {
        name: "Platform",
        tooltip: "Number of component loads",
        total: cost.componentCost,
        breakdown: [
          {
            name: `Component (${usage.componentLoads} loads)`,
            price: cost.componentCost
          },
          {
            name: `${usage.datasets} Datasets`,
            price: cost.datasetCost
          },
          {
            name: `${usage.users} Users`,
            price: cost.userCost
          }
        ],
        amount: usage.componentLoads,
        unit: "Component loads",
      },
    ])
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
        <p>
          Pricing calculator
        </p>
        <p className="text-sm font-thin pl-2 self-end">Estimate your price</p>
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
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'ai' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400' : ''}`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('infrastructure')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'infrastructure' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400' : ''}`}
          >
            Platform
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
                  <div>
                    <label
                      htmlFor="frequency"
                      className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
                    >
                      Vector Dimension
                    </label>
                    <select
                      id="frequency"
                      className="block px-7 py-2 border border-gray-300 rounded-md shadow-sm dark:text-gray-300 dark:bg-gray-600"
                      defaultValue="768"
                    >
                      <option value="768">768</option>
                      <option value="1024">1024</option>
                      <option value="1536">1536</option>
                      <option value="3072">3072</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="frequency"
                      className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300 "
                    >
                      Payload Size TODO
                    </label>
                    <select
                      id="frequency"
                      className="block px-7 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-600"
                      defaultValue="1536"
                    >
                      <option value="768">768</option>
                      <option value="1024">1024</option>
                      <option value="1536">1536</option>
                      <option value="3072">3072</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Chunks Stored</h3>
                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={1}
                        max={1_000_000_000}
                        markers={[1, 10, 100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000, 1_000_000_000]}
                        defaultValue={usage.chunksStored}
                        beforeValueText=""
                        afterValueText="chunks"
                        onChange={(value) => handleUsageChange('chunksStored', value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Searches / month</h3>
                  <PriceSlider
                    min={1}
                    max={100_000_000}
                    markers={[1, 10, 100, 1_000, 10_000, 100_000, 1_000_000, 1_000_000, 10_000_000, 100_000_000]}
                    defaultValue={usage.searchesSent}
                    beforeValueText=""
                    afterValueText="searches per month"
                    onChange={(value) => handleUsageChange('searchesSent', value)}
                  />
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Messages / month</h3>
                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={10}
                        max={100000}
                        markers={[10, 100, 1_000, 10_000, 100_000]}
                        defaultValue={usage.messagesSent}
                        beforeValueText=""
                        afterValueText="messages per month"
                        onChange={(value) => handleUsageChange('messagesSent', value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Writes / month</h3>
                  <PriceSlider
                    min={1}
                    max={100_000_000}
                    markers={[1, 10, 100, 1000, 10_000, 100_000,  1_000_000, 10_000000, 10_0000000]}
                    defaultValue={usage.writesPerMo}
                    beforeValueText=""
                    afterValueText="writes per month"
                    onChange={(value) => handleUsageChange('writesPerMo', value)}
                  />
                </div>
              </>
            )}
            {/* Data Ingestion Tab Content */}
            {activeTab === 'ingestion' && (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Website Crawler</h3>

                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={10}
                        max={100000}
                        markers={[10, 100, 1000, 10000, 100000]}
                        defaultValue={usage.pagesCrawled}
                        beforeValueText="Crawling"
                        afterValueText="web pages per month"
                        onChange={(value) => handleUsageChange('pagesCrawled', value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">OCR Processing</h3>
                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={10}
                        max={100000}
                        markers={[10, 100, 1000, 10000, 100000]}
                        defaultValue={usage.ocrPages}
                        beforeValueText=""
                        afterValueText="pages per month"
                        onChange={(value) => handleUsageChange('ocrPages', value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">File Storage</h3>
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
            {/* AI & Analytics Tab Content */}
            {activeTab === 'ai' && (
              <>
                <div>
                  <h3 className="text-lg font-medium mb-4">Analytics</h3>

                  <div>
                    <div className="relative">
                      <PriceSlider
                        min={100}
                        max={10000000}
                        markers={[100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000]}
                        defaultValue={usage.analyticsEvents}
                        beforeValueText="Tracking"
                        afterValueText="analytics events"
                        onChange={(value) => handleUsageChange('analyticsEvents', value)}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Infrastructure Tab Content */}
            {activeTab === 'infrastructure' && (
              <>
                <h3 className="text-lg font-medium mb-4">Infrastructure Settings</h3>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className=" dark:text-gray-300">Datasets (Namespaces)</label>
                  </div>

                  <div className="relative">
                    <PriceSlider
                      min={1}
                      max={10_000}
                      markers={[1, 10, 15, 50, 100, 1_000, 5_000, 10_000]}
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

                  <div className="relative">
                    <PriceSlider
                      min={1}
                      max={100}
                      markers={[1, 5, 10, 25, 50, 100]}
                      defaultValue={usage.users}
                      beforeValueText="With"
                      afterValueText="users"
                      onChange={(value) => handleUsageChange('users', value)}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label className="dark:text-gray-300">Search Component Loads</label>
                  </div>

                  <div className="relative">
                    <PriceSlider
                      min={100}
                      max={10000000}
                      markers={[100, 1000, 10000, 100000, 1000000, 10000000]}
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
                  <span className="">Total <span className="font-medium">{formatCurrency(item.total)}</span></span>
                </div>
                {item.amount > 0 &&
                  <div className="text-sm dark:text-gray-400 text-gray-700 mb-3">
                    {formatValue(item.amount)} {item.unit}
                  </div>}
                {item.breakdown.map((breakdownItem, index) => (
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
            <div className="text-3xl font-bold mt-4 md:mt-0">
              {formatCurrency(total.price + total.usageDiscount)}{' '}
              <span className="text-sm font-normal text-gray-600 dark:text-gray-400">/ month</span>
            </div>
            <div className="text-3xl font-bold mt-4 md:mt-0 text-red-500">
              -{formatCurrency(total.usageDiscount)}{' '}
              <span className="text-sm font-normal text-gray-600 dark:text-gray-400">/ month</span>
            </div>
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
