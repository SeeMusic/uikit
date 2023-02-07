// import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@seemusic/element-plus-theme-sop'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // html: {
  //   root: '#root-wrapper'
  // },
}

// export const decorators = [
//   (story) => ({
//     components: { story },
//     template: '<div id="root-wrapper"><story /></div>',
//   }),
// ];
