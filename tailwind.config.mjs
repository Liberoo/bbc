/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-grey': '#13151B',
				'light-grey': '#1C212D',
				'app-orange': '#C3700E',
				'airtable': 'hsl(0,0%,98%)'
			},
			boxShadow: {
				main: '15px 15px 15px rgba(0, 0, 0, 0.2)',
			}
		},
	},
	plugins: [],
}
