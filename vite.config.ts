import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: './', // 打包路径
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        // port: 3333, // 启动端口
        open: true,
        // host: "192.168.124.34",
        // proxy: {
        //   // 选项写法
        //   "/api": "http://:80", //代理网址
        // },
        // cors: true,
    },
})
