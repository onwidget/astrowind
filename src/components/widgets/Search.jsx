import { TrieveModalSearch } from 'trieve-search-component';

const SearchComponent = () => {
  return (
    <div className="flex justify-center">
      <div className="min-w-[300px]">
        <TrieveModalSearch
          apiKey="tr-zpPVGUq18FxOCmXgLfqGbmDOY4UMW00r"
          datasetId="4538ad9f-47cf-44d4-8a14-7c111f9558a9"
          theme={localStorage.getItem('theme') || 'dark'}
          defaultSearchQueries={['Create a chunk', 'Trieve vs. Algolia', 'Pricing']}
          defaultAiQuestions={[
            'What is Trieve?',
            'How to perform autocomplete search?',
            'Does Trieve use a re-ranker?',
          ]}
          brandLogoImgSrcUrl="https://cdn.trieve.ai/trieve-logo.png"
          brandName="Trieve"
          brandColor="#b557c5"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
