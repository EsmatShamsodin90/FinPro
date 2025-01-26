import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    historyApiFallback: true,  // این گزینه را بردارید
    watch: {
      usePolling: false, // بررسی تغییرات بدون استفاده از polling
    },
    hmr: {
      overlay: false, // غیرفعال کردن نمایش خطاهای HMR در مرورگر
    },
  },
})
