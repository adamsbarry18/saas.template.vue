import path from 'path';
import { fileURLToPath } from 'url';

export default {
  stories: ['../_resources/stories/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  async viteFinal(config: any) {
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ['@storybook/builder-vite'],
    };
    return {
      ...config,
      resolve: {
        alias: {
          '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src'),
        },
      },
    };
  },

  docs: {},
};
