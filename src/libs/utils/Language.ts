import i18n from '@/i18n';
import { initializeDateLocale } from './Date';
import { storageService } from './StorageService';

interface TranslateProvider {
  use: (lang: any) => void;
}

interface App {
  $translateProvider?: TranslateProvider;
}

declare global {
  interface Window {
    app?: App;
  }
}

export function updateActiveLanguage(lang: any, forceReload: boolean = false): void {
  storageService.setLanguage(lang);
  if (i18n.global.locale && typeof i18n.global.locale === 'object' && 'value' in i18n.global.locale) {
    i18n.global.locale.value = lang;
  } else {
    console.warn('i18n.global.locale is not a Ref, assigning directly.');
    i18n.global.locale = lang;
  }
  initializeDateLocale(lang);

  if (window.app?.$translateProvider) {
    window.app.$translateProvider.use(lang);
  }

  if (forceReload) {
    location.reload();
  }
}
