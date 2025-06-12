import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Define all required global variables
    __DEFINES__: JSON.stringify({
      VERSION: '0.0.0', // Using version from package.json
      APP_NAME: 'ncon',
    }),
    __HMR_CONFIG_NAME__: JSON.stringify('hmr'),
    __BASE__: JSON.stringify('/'),
    __MODE__: JSON.stringify(process.env.NODE_ENV || 'development'),
    __DEV__: process.env.NODE_ENV !== 'production',
    __PROD__: process.env.NODE_ENV === 'production',
    // React Router 7+ might need these
    __ROUTER_BASE__: JSON.stringify('/'),
    // Add any other variables you see in error messages
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    },
    // Ensure source maps are generated
    sourcemap: true,
    // Optimize chunks
    chunkSizeWarningLimit: 1000
  },
  server: {
    // Configure HMR explicitly
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    }
  },
  resolve: {
    // Ensure proper module resolution
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  }
})