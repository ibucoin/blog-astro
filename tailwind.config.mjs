/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container:{
			center:true,
			maxWidth: '1140px',
			screens:{
				xl:"1140px"
			}
		},
		extend: {
			colors: {
				'primary': 'var(--color-primary)',
			},
		},
	},
	plugins: [addDynamicIconSelectors()],
}
