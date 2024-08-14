import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        legacy()
    ],
    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@pages': '/src/pages',
            '@hooks': '/src/hooks',
            '@styles': '/src/styles',
            '@assets': '/src/assets',
            '@utils': '/src/utils',
            '@types': '/src/types',
            '@services': '/src/services',
        }
    },
})
