import { initTrieveModalSearch, TrieveSDK } from 'trieve-search-component';
import 'trieve-search-component/dist/index.css';

const trieve = new TrieveSDK({
  apiKey: 'tr-cs4zCkeKgrki09aOykgKUt53K2Uv0mhT',
  datasetId: '15bd032c-ff24-454d-beee-6b6cac97d8be',
});

initTrieveModalSearch({
  trieve,
  theme: localStorage.getItem('theme') || 'dark',
});

const SearchComponent = () => {
  return (
    <div class="flex justify-center">
      <div class="min-w-[300px]">
        <trieve-modal-search />
      </div>
    </div>
  );
};

export default SearchComponent;
