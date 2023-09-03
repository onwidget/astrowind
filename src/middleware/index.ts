import { sequence } from "astro/middleware";
import { i18nMiddleware } from "astro-i18n-aut";

export const onRequest = sequence(i18nMiddleware);