export const install = `# Install the package
# npm
npm i trieve-search-component
# yarn
yarn add trieve-search-component
# pnpm
pnpm i trieve-search-component`;

export const newTrieve = `// 2 - Instantiate the trieve SDK
import { TrieveSDK } from "trieve-ts-sdk";
export const trieve = new TrieveSDK({
  apiKey: "<your-api-key>",
  datasetId: "<dataset-to-use>",
});`;

export const reactComponent = `// 2 - Use The Components
<TrieveModalSearch datasetId="<dataset-to-use>" apiKey="<your-api-key>" />
// or
<TrieveSearch datasetId="<dataset-to-use>" apiKey="<your-api-key>" />
`;

export const wcComponent = `// 2 - Use The Components
initModalSearch({
  datasetId: "<dataset-to-use>",
  apiKey: "<your-api-key>",
})
<trieve-modal-search />
// or
initSearch({
  datasetId: "<dataset-to-use>",
  apiKey: "<your-api-key>",
})
<trieve-search />
`;
