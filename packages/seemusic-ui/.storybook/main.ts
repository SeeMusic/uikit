import { StorybookConfig } from '@storybook/vue3-vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@whitespace/storybook-addon-html'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    defaultName: '文档',
    autodocs: 'tag',
  },
  async viteFinal(config: any) {
		const idx = config.plugins.findIndex(
			(p) => Array.isArray(p) && p.some((nested) => nested.name.includes('react')),
		);
		config.plugins.splice(idx, 1);
		config.plugins.push(vueJsx());
		return config;
	}
};

export default config;
