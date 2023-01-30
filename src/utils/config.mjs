import SITE from '../config/site';
import ANALYTICS from '../config/analytics';

export default SITE;

export const hasGoogleAnalytics = ANALYTICS?.googleAnalyticsId ? true : false;
