import { defineConfig } from "vitest/config";
import * as path from "path";

export default defineConfig({
    test: {
        environment: "jsdom",
        include: ["**/*.spec.ts"],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});
