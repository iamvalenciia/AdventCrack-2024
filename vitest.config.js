import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.js"], // Incluir todos los archivos de prueba dentro de "tests/utils"
  },
});
