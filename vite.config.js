  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],


    server: {
        proxy: {
          '/user' : {
            target : 'https://api-fb6o.onrender.com'
          },

          '/playground' : {
            target : 'https://api-fb6o.onrender.com'
          }


        },
      },


      
  }); 