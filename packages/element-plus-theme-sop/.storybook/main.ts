import type { StorybookViteConfig } from '@storybook/builder-vite';

const { mergeConfig } = require('vite');

const config: StorybookViteConfig = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config, options) {
    // return the customized config
    return mergeConfig(config, {
      // 可以从 vite.config.ts 中引入配置，比如 resolve。实际上此处即为 vite.config，直接写在这里也可以
      // resolve: (await import('../vite.config')).default.resolve,
    });
  },
};

export default config;
