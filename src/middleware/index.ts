import { sequence } from "astro/middleware";
import { i18nMiddleware } from "astro-i18n-aut";
import { I18N_CONFIG } from "~/utils/config";

const i18n = i18nMiddleware({ defaultLocale: I18N_CONFIG.defaultLocale });

export const onRequest = sequence(i18n);