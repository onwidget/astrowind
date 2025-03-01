import React, { useState, useEffect } from 'react';
import PriceSlider from './PriceSlider';

const PricingCalculator = () => {
  const [usage, setUsage] = useState({
    chunkStorage: 0.01, // per gb/indice
    vectorInference: 10, // per hundred thousand tokens
    searchTokens: 5, // per hundred thousand
    fileStorage: 50, // per GB
    webCrawls: 100, // per page
    ocrPages: 0, // per thousand token
    chatTokens: 1000, // per thousand token
    analyticsEvents: 100000, // per event
    namespaces: 2,
    users: 5,
    componentLoads: 10000,
  });

  const discountTiers = [
    { threshold: 1000000, discount: 0.0667 },
    { threshold: 10000000, discount: 0.1334 },
    { threshold: 100000000, discount: 0.2 },
    { threshold: 1000000000, discount: 0.2667 }, // Max discount of 26.67%
  ];

  const [total, setTotal] = useState(0);
  const [activeTab, setActiveTab] = useState('search'); // Tab for product categories

  // Pricing rates based on the provided specifications
  const pricing = {
    recommendations: {
      baseRate: 0, // Free, RPS limited
      description: 'Real-time recommendations based on user behavior',
    },
    vectorInference: {
      baseRate: 0.195, // 1.5x OpenAI's embedding rate per token per million
      freeTier: 0.5,
      description: 'Vector/Reranker Inference Search + Ingest',
    },
    chunkStorage: {
      baseRate: 4.59, // per gb/indice
      freeTier: 0.01,
      description: 'Storage for vector embeddings',
    },
    webCrawls: {
      baseRate: 0.00475, // $0.0015 per page (0.75x of competitors)
      freeTier: 2000,
      description: 'Automated website crawling',
    },
    fileStorage: {
      baseRate: 0.0345, // per GB (1.5x S3 pricing)
      freeTier: 10,
      description: 'File storage for documents and assets',
    },
    fileChunking: {
      baseRate: 0.0075, // per page (0.75x Chunkr pricing)
      freeTier: 100,
      description: 'Tika processing for document chunking',
    },
    ocrPages: {
      baseRate: 0.01, // per thousand token (1.5x VLLM)
      freeTier: 100,
      description: 'Optical character recognition for images and PDFs',
    },
    chatMessages: {
      baseRate: 0.01, // per thousand token (1.5x LLM 4o)
      freeTier: 100,
      description: 'Retrieval augmented generation',
    },
    analyticsEvents: {
      baseRate: 0.000075, // per event (1.5x Posthog)
      freeTier: 1000000,
      description: 'Event tracking and analysis',
    },
    namespaces: {
      baseRate: 1, // $1 per dataset
      freeTier: 10,
      description: 'Separate data environments',
    },
    users: {
      baseRate: 2, // $2 per user
      freeTier: 5,
      description: 'User accounts with access controls',
    },
    rateLimits: {
      baseRate: 0, // 10 free, contact for more
      freeTier: 10,
      description: 'API rate limits',
    },
    componentLoads: {
      baseRate: 0.0007, // $0.0007 per load
      freeTier: 15000,
      description: 'UI component load operations',
    },
    commission: {
      addToCart: 0.01, // 1% add to cart
      interaction: 0.003, // 0.3% on interaction
      description: 'Commission on e-commerce transactions',
    },
  };

  const calculatePrice = (product, amount) => {
    if (!pricing[product]) return 0;

    const { baseRate, freeTier = 0 } = pricing[product];

    // Apply free tier
    const billableAmount = Math.max(0, amount - freeTier);

    if (billableAmount <= 0) return 0;

    // If no discount tiers or special pricing, apply base rate to billable amount
    if (discountTiers.length === 0) return baseRate * billableAmount;

    let remainingAmount = billableAmount;
    let totalPrice = 0;
    let lastThreshold = 0;

    // Sort discount tiers by threshold to ensure proper calculation
    const sortedTiers = [...discountTiers].sort((a, b) => a.threshold - b.threshold);

    // Apply tiered pricing
    for (const tier of sortedTiers) {
      if (billableAmount > tier.threshold) {
        // Calculate the amount in this tier
        const tierAmount = tier.threshold - lastThreshold;
        const discountedRate = baseRate * (1 - tier.discount);
        totalPrice += tierAmount * discountedRate;
        remainingAmount -= tierAmount;
        lastThreshold = tier.threshold;
      } else {
        break;
      }
    }

    // Add remaining amount at the appropriate discount level
    if (remainingAmount > 0) {
      // Find the applicable tier for the remaining amount
      const applicableTier =
        sortedTiers.find((tier) => billableAmount <= tier.threshold) ||
        (sortedTiers.length > 0 ? sortedTiers[sortedTiers.length - 1] : null);

      const discountedRate = baseRate * (1 - (applicableTier?.discount || 0));
      totalPrice += remainingAmount * discountedRate;
    }

    return totalPrice;
  };

  // Update total when any value changes
  useEffect(() => {
    let newTotal = 0;
    // Calculate cost for each selected product
    newTotal += calculatePrice('vectorInference', usage.vectorInference / 10 + usage.searchTokens / 10);
    // Assuming some relationship between vectorTokens and storage needs
    newTotal += calculatePrice('chunkStorage', usage.chunkStorage);

    newTotal += calculatePrice('fileStorage', usage.fileStorage);

    newTotal += calculatePrice('webCrawls', usage.webCrawls);

    newTotal += calculatePrice('chatMessages', usage.chatTokens);

    newTotal += calculatePrice('ocrPages', usage.ocrPages);

    newTotal += calculatePrice('fileChunking', usage.ocrPages);

    newTotal += calculatePrice('analyticsEvents', usage.analyticsEvents);

    // Always include these base costs
    newTotal += calculatePrice('namespaces', usage.namespaces);
    newTotal += calculatePrice('users', usage.users);
    newTotal += calculatePrice('componentLoads', usage.componentLoads);

    setTotal(newTotal);
  }, [usage]);

  // Format currency
  const formatCurrency = (amount) => {
    if (amount === 0) return '$0.00';
    if (amount < 0.01 && amount > 0) {
      return '$' + amount.toFixed(6);
    }
    return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Toggle product selection
  const toggleProduct = (product) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [product]: !prev[product],
    }));
  };

  // Handle usage input change
  const handleUsageChange = (product, value) => {
    setUsage((prev) => ({
      ...prev,
      [product]: parseInt(value, 10) || 0,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto  text-white rounded-xl shadow-2xl overflow-hidden mt-2">
      <div className="text-2xl font-bold p-6 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-3 text-fuchsia-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        Pricing calculator
      </div>

      {/* Main tab navigation */}
      <div className="border-b border-gray-800">
        <div className="flex overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab('search')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'search' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400' : 'text-gray-400 hover:text-gray-300'}`}
          >
            Search & Vector DB
          </button>
          <button
            onClick={() => setActiveTab('storage')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'storage' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400' : 'text-gray-400 hover:text-gray-300'}`}
          >
            Data Storage & Processing
          </button>
          <button
            onClick={() => setActiveTab('ingestion')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'ingestion' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400' : 'text-gray-400 hover:text-gray-300'}`}
          >
            Data Ingestion
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'ai' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400' : 'text-gray-400 hover:text-gray-300'}`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('infrastructure')}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === 'infrastructure' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400' : 'text-gray-400 hover:text-gray-300'}`}
          >
            Infrastructure
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Usage calculator */}
        <div className="w-full md:w-3/4 p-6 border-b md:border-b-0 md:border-r border-gray-800">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Estimate your price</h3>
          </div>

          <div className="space-y-10">
            {/* Search Tab Content */}
            {activeTab === 'search' && (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">AI & Search</h3>
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-300">Search Tokens (per hundred thousand)</label>
                  </div>
                  <PriceSlider
                    min={1}
                    max={10000}
                    markers={[1, 10, 100, 1000, 10000]}
                    defaultValue={usage.searchTokens}
                    beforeValueText="Processing"
                    afterValueText="hundred thousand search tokens"
                    onChange={(value) => handleUsageChange('searchTokens', value)}
                  />
                  <div className="flex mb-2">
                    <label className="text-gray-300 mr-2">Costs:</label>
                    <div>{formatCurrency(calculatePrice('vectorInference', usage.searchTokens / 10))}</div>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">RAG Processing</h3>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className=" text-gray-300">Tokens</label>
                    </div>

                    <div className="relative">
                      <PriceSlider
                        min={10}
                        max={100000}
                        markers={[10, 100, 1000, 10000, 100000]}
                        defaultValue={usage.chatTokens}
                        beforeValueText="Processing"
                        afterValueText="thousand RAG tokens"
                        onChange={(value) => handleUsageChange('chatTokens', value)}
                      />
                    </div>
                    <div className="flex mb-2">
                      <label className="text-gray-300 mr-2">Costs:</label>
                      <div>{formatCurrency(calculatePrice('chatMessages', usage.chatTokens))}</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Data Ingestion Tab Content */}
            {activeTab === 'storage' && (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Chunk Processing</h3>
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-300">Chunk Tokens (per hundred thousand)</label>
                  </div>
                  <PriceSlider
                    min={1}
                    max={10000}
                    markers={[1, 10, 100, 1000, 10000]}
                    defaultValue={usage.vectorInference}
                    beforeValueText="Processing"
                    afterValueText="hundred thousand chunk tokens"
                    onChange={(value) => handleUsageChange('vectorInference', value)}
                  />
                  <div className="flex mb-2">
                    <label className="text-gray-300 mr-2">Costs:</label>
                    <div>{formatCurrency(calculatePrice('vectorInference', usage.vectorInference / 10))}</div>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Chunk Storage</h3>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-gray-300">Storage (MB)</label>
                    </div>

                    <div className="relative">
                      <PriceSlider
                        min={1}
                        max={100000}
                        markers={[1, 10, 100, 1000, 10000, 100000]}
                        defaultValue={usage.chunkStorage * 1000}
                        beforeValueText="Storing"
                        afterValueText="MB(s) of chunks"
                        onChange={(value) => handleUsageChange('chunkStorage', value / 1000)}
                      />
                    </div>
                    <div className="flex mb-2">
                      <label className="text-gray-300 mr-2">Costs:</label>
                      <div>{formatCurrency(calculatePrice('chunkStorage', usage.chunkStorage))}</div>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">File Storage</h3>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-gray-300">Storage (GB)</label>
                    </div>

                    <div className="relative">
                      <PriceSlider
                        min={10}
                        max={1000000}
                        markers={[10, 100, 1000, 10000, 100000, 1000000]}
                        defaultValue={usage.fileStorage}
                        beforeValueText="Storing"
                        afterValueText="GB(s) of files"
                        onChange={(value) => handleUsageChange('fileStorage', value)}
                      />
                    </div>
                    <div className="flex mb-2">
                      <label className="text-gray-300 mr-2">Costs:</label>
                      <div>{formatCurrency(calculatePrice('fileStorage', usage.fileStorage))}</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Data Ingestion Tab Content */}
            {activeTab === 'ingestion' && (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Website Crawls</h3>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-gray-300">Pages</label>
                    </div>

                    <div className="relative">
                      <PriceSlider
                        min={10}
                        max={100000}
                        markers={[10, 100, 1000, 10000, 100000]}
                        defaultValue={usage.webCrawls}
                        beforeValueText="Crawling"
                        afterValueText="web pages per month"
                        onChange={(value) => handleUsageChange('webCrawls', value)}
                      />
                    </div>
                    <div className="flex mb-2">
                      <label className="text-gray-300 mr-2">Costs:</label>
                      <div>{formatCurrency(calculatePrice('webCrawls', usage.webCrawls))}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">OCR Processing</h3>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className=" text-gray-300">Pages</label>
                    </div>

                    <div className="relative">
                      <PriceSlider
                        min={10}
                        max={100000}
                        markers={[10, 100, 1000, 10000, 100000]}
                        defaultValue={usage.ocrPages}
                        beforeValueText="Processing"
                        afterValueText="OCR pages"
                        onChange={(value) => handleUsageChange('ocrPages', value)}
                      />
                    </div>
                    <div className="flex mb-2">
                      <label className="text-gray-300 mr-2">Costs:</label>
                      <div>{formatCurrency(calculatePrice('ocrPages', usage.ocrPages))}</div>
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
                    <div className="flex justify-between mb-2">
                      <label className=" text-gray-300">Events</label>
                    </div>

                    <div className="relative">
                      <PriceSlider
                        min={100}
                        max={10000000}
                        markers={[100, 1000, 10000, 100000, 1000000, 10000000]}
                        defaultValue={usage.analyticsEvents}
                        beforeValueText="Tracking"
                        afterValueText="analytics events"
                        onChange={(value) => handleUsageChange('analyticsEvents', value)}
                      />
                    </div>
                    <div className="flex mb-2">
                      <label className="text-gray-300 mr-2">Costs:</label>
                      <div>{formatCurrency(calculatePrice('analyticsEvents', usage.analyticsEvents))}</div>
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
                    <label className=" text-gray-300">Namespaces</label>
                  </div>

                  <div className="relative">
                    <PriceSlider
                      min={1}
                      max={100}
                      markers={[1, 5, 15, 50, 100]}
                      defaultValue={usage.namespaces}
                      beforeValueText="Using"
                      afterValueText="namespaces"
                      onChange={(value) => handleUsageChange('namespaces', value)}
                    />
                  </div>
                  <div className="flex mb-2">
                    <label className="text-gray-300 mr-2">Costs:</label>
                    <div>{formatCurrency(calculatePrice('namespaces', usage.namespaces))}</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className=" text-gray-300">Users</label>
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
                  <div className="flex mb-2">
                    <label className="text-gray-300 mr-2">Costs:</label>
                    <div>{formatCurrency(calculatePrice('users', usage.users))}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-300">Component Loads</label>
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
                  <div className="flex mb-2">
                    <label className="text-gray-300 mr-2">Costs:</label>
                    <div>{formatCurrency(calculatePrice('componentLoads', usage.componentLoads))}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* How pricing works */}
        <div className="w-full md:w-1/4 p-6 ">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-fuchsia-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            How our pricing works
          </h3>

          <div className="space-y-6">
            <div className="rounded-lg p-4">
              <h4 className="text-lg mb-2 flex items-center text-fuchsia-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Only pay for products you use
              </h4>
              <p className="text-gray-300 text-sm ml-7">Check or uncheck products to include in your estimate</p>
            </div>

            <div className=" rounded-lg p-4">
              <h4 className="text-lg mb-2 flex items-center text-fuchsia-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Generous free tier for each product
              </h4>
              <p className="text-gray-300 text-sm ml-7">
                1M free events monthly
                <br />
                <span className="text-xs text-gray-400">(resets monthly)</span>
              </p>
            </div>

            <div className=" rounded-lg p-4">
              <h4 className="text-lg mb-2 flex items-center text-fuchsia-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Volume discounts
              </h4>
              <p className="text-gray-300 text-sm ml-7">
                6.67% discount per order of magnitude
                <br />
                <span className="text-xs text-gray-400">(up to 26.67% maximum)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Total section */}
      <div className="border-t border-gray-800 p-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Estimated total</h3>
            <p className="text-sm text-gray-400">for all products & add-ons</p>
          </div>
          <div className="text-3xl font-bold mt-4 md:mt-0">
            {formatCurrency(total)} <span className="text-sm font-normal text-gray-400">/ month</span>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 px-6 rounded-lg font-medium transition duration-200">
              Get started free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
