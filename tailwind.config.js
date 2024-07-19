// tailwind.config.js

module.exports = {
	mode: "jit",
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false,
	theme: {
		extend: {
			screens: {
				// mobile: "320px",
				tablet: "640px",
				laptop: "1024px",
				desktop: "1536px",

				// Breakpoint prefix	Minimum width	CSS
				// sm	640px	@media (min-width: 640px) { ... }
				// md	768px	@media (min-width: 768px) { ... }
				// lg	1024px	@media (min-width: 1024px) { ... }
				// xl	1280px	@media (min-width: 1280px) { ... }
				// 2xl	1536px	@media (min-width: 1536px) { ... }
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["hover"],
		},
	},
	plugins: [],
};
