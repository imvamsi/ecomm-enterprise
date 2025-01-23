// import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
//
// // https://vite.dev/config/
// export default defineConfig({
//     server: {
//         // proxy: {
//         //     '/api': 'http://localhost:5173',
//         //     '/uploads': 'http://localhost:5173',
//         // },
//         proxy: {
//             '/api': {
//                 target: 'http://localhost:8000', // Your backend server
//                 changeOrigin: true, // Ensures the host header is changed to match the target
//                 secure: false, // If your backend uses self-signed certificates, set this to false
//                 rewrite: (path) => path.replace(/^\/api/, ''),
//                 ws: true// Optional: Adjust the path if needed
//             },
//         },
//     },
//     plugins: [react()],
// });
import {defineConfig} from 'vite'

//https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react()
    ],
    server: {
        proxy: {
            '/api': 'http://localhost:8000',
            '/uploads': 'http://localhost:8000',
        }
    }
})
// export default defineConfig({
//     server: {
//         proxy: {
//             '/api': {
//                 target: 'http://localhost:8000', // Correct backend server
//                 changeOrigin: true,  // Ensures the host header matches target
//                 secure: false,       // Use false for self-signed certificates in dev
//                 rewrite: (path) => path,
//             },
//         },
//     },
// });