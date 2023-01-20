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
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F8F8F8',
      },
    ],
  },
}
