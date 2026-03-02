import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	server: {
	    allowedHosts: ["heads.intern.onthepixel.net"]
	},
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"@components": path.resolve("./src/lib/components"),
			"@scripts": path.resolve("./src/lib/scripts")
		}
	}
});
