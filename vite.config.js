// import path from "node:path";
import {
	defineConfig,
	loadEnv
} from "vite";
// import WindiCSS from "vite-plugin-windicss";
// import eslint from "vite-plugin-eslint";

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			uni(),
			// Components({
			//   resolvers: [],
			// }),
			// WindiCSS(),
			// eslint(),
		],
	}
});