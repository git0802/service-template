export default defineI18nConfig(() => {
  return {
    fallbackLocale: 'en',
    legacy: false,
    formatFallbackMessages: true,
    silentFallbackWarn: true,
    silentTranslationWarn: true,
  };
});
