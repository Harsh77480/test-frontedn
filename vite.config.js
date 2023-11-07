  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    // https://api-fb6o.onrender.com

    server: {
        proxy: {
          '/x' : {
            target : 'http://localhost:3000/'
          },


        },
      },


      
  }); 