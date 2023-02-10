import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import pkg from './package.json';

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));

  return {
    css: { preprocessorOptions: { scss: { charset: false } } },
    build: {
      emptyOutDir: false,
      sourcemap: true,
      lib: {
        entry: 'src/entry.ts',
        name: 'ui-components',
        formats: ['umd'],
        fileName: () => `${ pkg.name }.min.js`
      },
      rollupOptions: {
        external: ['vue', 'vue-router', 'element-plus'],
        output: {
          assetFileNames: `${ pkg.name }.min.css`,
          globals: { vue: 'Vue', vueRouter: 'vue-router', elementPlus: 'element-plus'}
        }
      }
    },
    plugins: [
      vue(),
      vueJsx({ optimize: false, enableObjectSlots: true })
    ],
    define: {
      __UI_NAME__: JSON.stringify(pkg.name),
      __UI_VERSION__: JSON.stringify(pkg.version)
    }
  };
});
