import { resolve } from "path"
import { defineConfig } from 'vite'

export default defineConfig({
    base: "/12d-2023-24-etterem-weblap/",
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                etlap: resolve(__dirname, "etlap.html"),
                kapcsolat: resolve(__dirname, "kapcsolat.html"),
                nyitvatartas: resolve(__dirname, "nyitvatartas.html")
            }
        }
    }
});