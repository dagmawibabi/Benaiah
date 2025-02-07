import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				batangas: ['Batangas']
			}
		}
	},

	plugins: []
} satisfies Config;
