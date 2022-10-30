import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
//自动导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  // scss全局变量需要全局导入
  css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "~/style/mixin.scss";`
			}
		}
	},
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5002",
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
          //console.log(proxy, options);
        },
      },
    },
  },
 
  
});
