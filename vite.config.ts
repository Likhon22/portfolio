import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// ✅ Import TailwindCSS

export default defineConfig({
  plugins: [react(), tailwindcss()], // ✅ Remove extra comma
});
