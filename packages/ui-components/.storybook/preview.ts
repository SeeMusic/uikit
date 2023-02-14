import 'element-plus/dist/index.css';
import '@seemusic/styles/src/colors/seemusic.scss';
import '@seemusic/element-plus-theme-sop';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
