import { TrieveModalSearch } from 'trieve-search-component';

const SearchComponent = () => {
  return (
    <div className="flex justify-center">
      <div className="min-w-[300px]">
        <TrieveModalSearch
          apiKey="tr-b9werMdlgnMVsFmqTASCL8or50TU6uJ4"
          datasetId="4538ad9f-47cf-44d4-8a14-7c111f9558a9"
          theme={localStorage.getItem('theme') || 'dark'}
          defaultSearchQueries={['Create a chunk', 'Trieve vs. Algolia', 'Pricing']}
          defaultAiQuestions={[
            'What is Trieve?',
            'How to perform autocomplete search?',
            'Does Trieve use a re-ranker?',
          ]}
          brandLogoImgSrcUrl="https://cdn.trieve.ai/trieve-logo.png"
          problemLink="mailto:help@trieve.ai?subject="
          brandName="Trieve"
          brandColor="#b557c5"
          searchOptions={{
            use_autocomplete: false,
            typo_options: {
              correct_typos: true,
            },
            search_type: 'fulltext',
          }}
          tags={[
            {
              key: 'openapi-route',
              tag: 'openapi-route',
              label: 'API Routes',
              icon: () => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-code-slash"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
