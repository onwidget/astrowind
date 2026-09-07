declare module 'codemyc:config' {
  import type { SiteConfig, I18NConfig, MetaDataConfig } from './utils/configBuilder';

  export const SITE: SiteConfig;
  export const I18N: I18NConfig;
  export const METADATA: MetaDataConfig;
}
