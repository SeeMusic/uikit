// import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import '../src/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        value: '#FFFFFF',
      },
      {
        name: 'Dark',
        value: '#000000',
      },
    ],
  },
}
