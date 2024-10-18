import { useState, useEffect } from 'react';
import { codeToHtml } from 'shiki';
import { install, reactComponent, wcComponent } from '~/utils/docsearch-code';

const UsageTabs = () => {
  const [selectedTab, setSelectedTab] = useState('react');
  const [installCode, setInstallCode] = useState('');
  const [reactComponentCode, setReactComponentCode] = useState('');
  const [wcComponentCode, setWcComponentCode] = useState('');

  useEffect(() => {
    codeToHtml(install, {
      lang: 'bash',
      theme: 'night-owl',
    }).then((html) => setInstallCode(html));

    codeToHtml(reactComponent, {
      lang: 'jsx',
      theme: 'night-owl',
    }).then((html) => setReactComponentCode(html));

    codeToHtml(wcComponent, {
      lang: 'jsx',
      theme: 'night-owl',
    }).then((html) => setWcComponentCode(html));
  }, []);

  return (
    <div className="bg-page px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            onChange={(e) => setSelectedTab(e.target.value)}
            selected={selectedTab == 'react' ? 'react' : 'wc'}
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-none dark:bg-white/5 py-2 pl-3 pr-10 text-base dark:text-white shadow-sm ring-1 ring-inset dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm"
          >
            <option value="react">React</option>
            <option value="wc">Web Components</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex border-b border-black/10 dark:border-white/10 py-4">
            <ul
              role="list"
              className="flex min-w-full flex-none gap-x-6 px-2 text-sm font-semibold leading-6 text-gray-400"
            >
              <li key="react">
                <button
                  onClick={() => setSelectedTab('react')}
                  className={`${selectedTab === 'react' ? 'text-magenta-500' : ''}`}
                >
                  React
                </button>
              </li>
              <li key="wc">
                <button
                  onClick={() => setSelectedTab('wc')}
                  className={`${selectedTab === 'wc' ? 'text-magenta-500' : ''}`}
                >
                  Web Components
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-4 usage-tabs">
        <div className="flex items-stretch flex-wrap">
          <div
            className="my-2 grow"
            dangerouslySetInnerHTML={{
              __html: installCode,
            }}
          ></div>
          <div
            className="my-2 grow"
            dangerouslySetInnerHTML={
              selectedTab === 'react' ? { __html: reactComponentCode } : { __html: wcComponentCode }
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UsageTabs;
