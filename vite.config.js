import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";
export default defineConfig ({
    root:"src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src/index.html"),
                contact: path.resolve(__dirname, "src/scholar_contact.html"),
                shop: path.resolve(__dirname, "src/scholar_shop.html"),
                courses: path.resolve(__dirname, "src/scholar_courses.html"),
                // ...
            }
        }
    },
    plugins: [ViteEjsPlugin()],
});
