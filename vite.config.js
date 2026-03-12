import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
    plugins: [ viteSingleFile() ],
    // set base in production
    base: process.env.NODE_ENV === 'production' ? '/WebPoster/' : '/',
})
