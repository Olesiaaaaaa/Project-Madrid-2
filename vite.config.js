import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Говорим Vite, что файлы с заглавными расширениями - это картинки
  assetsInclude: ['**/*.JPG', '**/*.PNG', '**/*.JPEG'],
})
