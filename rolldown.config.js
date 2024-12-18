import { defineConfig } from 'rolldown'
import Vue from 'unplugin-vue/rolldown'
// import vuePlugin from 'plugin-vue-rolldown-hmr-demo'
export default defineConfig({
  input: './src/main.ts',
  resolve: {
    // This needs to be explicitly set for now because oxc resolver doesn't
    // assume default exports conditions. Rolldown will ship with a default that
    // aligns with Vite in the future.
    conditionNames: ['import'],
  },
  external: ['vue'],
  plugins: [
    Vue(),
    // vuePlugin({
    //   devServer: {
    //     watcher: {
    //       on() {},
    //     },
    //     config: {
    //       server: {
    //         hmr: true,
    //       },
    //     },
    //   },
    // }),
    // {
      // name: 'emit-html',
      // generateBundle() {
      //   this.emitFile({
      //     type: 'asset',
      //     fileName: 'index.html',
      //     source: `<div id="app"></div><script src="./main.ts"></script>`,
      //   })
      // },
    // },
  ],
  experimental: {
    enableComposingJsPlugins: true,
  },
})