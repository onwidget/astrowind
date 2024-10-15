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

export const reactComponent = `// 3 - Use The Components
<TrieveModalSearch trieve={trieve} />
// or
<TrieveSearch trieve={trieve} />
`;

export const wcComponent = `// 3 - Use The Components
initModalSearch({
  trieve,
})
<trieve-modal-search />
// or
initSearch({
  trieve,
})
<trieve-search />
`;
