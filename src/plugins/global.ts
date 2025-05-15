import { App, DefineComponent } from 'vue';
import { ElLoading, ElInfiniteScroll } from 'element-plus';
import * as icons from '@/modules/ui/icons';

// Define a type for the icons object
type IconComponents = Record<string, DefineComponent<object, object, any>>;

function registerGlobalComponents(app: App) {
  Object.keys(icons).forEach((key) => {
    const snakeCaseName = key.replace(/\.?([A-Z])/g, (x, y) => `-${y.toLowerCase()}`).replace(/^-/, '');
    app.component(snakeCaseName, (icons as IconComponents)[key]);
  });
}

function registerDirectives(app: App) {
  app.use(ElLoading);
  app.directive('infinite-scroll', ElInfiniteScroll);
}

export default {
  install: (app: App) => {
    // Configuration globale d'Element Plus
    app.config.globalProperties.$ELEMENT = { size: 'small' };

    // Enregistrement des composants et directives
    registerGlobalComponents(app);
    registerDirectives(app);
  },
};
