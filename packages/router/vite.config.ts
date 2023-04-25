import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import * as path from "path";

const resolvePath = (dir: string) => path.resolve(__dirname, dir);

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolvePath("src/index.ts"),
      name: "index",
      fileName: "index",
    },
  },
  plugins: [
    typescript({
      rootDir: resolvePath("src"),
      declaration: true,
      declarationDir: resolvePath("dist"),
      sourceMap: true,
      exclude: [resolvePath("node_modules/**")],
    }),
  ],
});
