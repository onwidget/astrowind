import { createSignal, createResource } from 'solid-js';
import { codeToHtml } from 'shiki';
import { install, newTrieve, reactComponent, wcComponent } from '~/utils/docsearch-code';

const UsageTabs = () => {
  const [selectedTab, setSelectedTab] = createSignal('react');
  const [installCode] = createResource(() =>
    codeToHtml(install, {
      lang: 'bash',
      theme: 'night-owl',
    })
  );
  const [newTrieveCode] = createResource(() =>
    codeToHtml(newTrieve, {
      lang: 'javascript',
      theme: 'night-owl',
    })
  );
  const [reactComponentCode] = createResource(() =>
    codeToHtml(reactComponent, {
      lang: 'jsx',
      theme: 'night-owl',
    })
  );
  const [wcComponentCode] = createResource(() =>
    codeToHtml(wcComponent, {
      lang: 'jsx',
      theme: 'night-owl',
    })
  );
  return (
    <div class="bg-page px-4 py-6 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-5xl">
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">
            Select a tab
          </label>
          <select
            onChange={(e) => setSelectedTab(e.target.value)}
            id="tabs"
            name="tabs"
            class="block w-full rounded-md border-none dark:bg-white/5 py-2 pl-3 pr-10 text-base dark:text-white shadow-sm ring-1 ring-inset dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm"
          >
            <option value="react" selected={selectedTab() === 'react'}>
              React
            </option>
            <option value="wc" selected={selectedTab() === 'wc'}>
              Web Components
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="flex border-b border-black/10 dark:border-white/10 py-4">
            <ul
              role="list"
              class="flex min-w-full flex-none gap-x-6 px-2 text-sm font-semibold leading-6 text-gray-400"
            >
              <li>
                <button
                  onClick={() => setSelectedTab(() => 'react')}
                  class={`${selectedTab() === 'react' ? 'text-indigo-500' : ''}`}
                >
                  React
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedTab(() => 'wc')}
                  class={`${selectedTab() === 'wc' ? 'text-indigo-500' : ''}`}
                >
                  Web Components
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="max-w-5xl mx-auto mt-4 usage-tabs">
        <div class="flex items-stretch flex-wrap">
          <div class="my-2 grow" innerHTML={installCode()}></div>
          <div class="my-2 grow" innerHTML={newTrieveCode()}></div>
          <div class="my-2 grow" innerHTML={selectedTab() === 'react' ? reactComponentCode() : wcComponentCode()}></div>
        </div>
      </div>
    </div>
  );
};

export default UsageTabs;
