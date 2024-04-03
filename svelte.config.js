import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		    alias: {
      "~": "src",
			"assets":"src/lib/assets",
			"images":"src/lib/assets/images",
			"videos":"src/lib/assets/videos",
    },
	},
};

export default config;
