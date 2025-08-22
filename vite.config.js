import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Jin-Her/',   // 🔴 리포 이름과 동일하게!
  plugins: [react()],
})
