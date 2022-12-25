import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     origin: 'http://localhost:3000',
//     port: 5173,
//     proxy: {
//       '/api': {
//         target: 'http://127.0.0.1:5173',
//         rewrite: (path) => path.replace(/^\/api/, ''),
//         ws: false
//       },
//       '/ws': {
//         target: "ws://localhost:8080",
//         rewrite: (path) => path.replace(/^\/ws/, ''),
//         ws: true
//       }
//     },
//     strictPort: true,
//     hmr: {
//       clientPort: 8080,
//       port: 3000,
//     }
//   },
//   plugins: [
//     react({
//       include: ["**/*.jsx", "**/*.tsx", "**/*.js"],
//     }),
//     svgrPlugin({
//       svgrOptions: {
//         icon: true,
//       },
//     }),
//   ],
//   preview: {
//     port: 3000,
//   }
// })

export default defineConfig({
  server: {
    origin: 'http://localhost:3000',
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5173',
        rewrite: (path) => path.replace(/^\/api/, ''),
        ws: false
      },
      '/ws': {
        target: "ws://localhost:8080",
        rewrite: (path) => path.replace(/^\/ws/, ''),
        ws: true
      }
    },
    // strictPort: true,
    // hmr: {
    //   clientPort: 8080,
    //   port: 3000,
    // }
  },
  plugins: [
    react({
      include: ["**/*.jsx", "**/*.tsx", "**/*.js"],
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  preview: {
    port: 3000,
  }
})