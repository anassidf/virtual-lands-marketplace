/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				gray: '#333333',
				darkBlue: '#240051',
				milkWhite: '#EBF0F4',
				lightPurple: '#7000FF',
				freshPink: '#FF5665',
				lightGreen: '#2CCE8F',
			},

			backgroundImage: {
				earthBackground:
					"url('/src/assets/images/registration-bachground.jpg')",
				heroSectionBackground:
					"url('/src/assets/images/hero-section-image.avif')",
			},
		},
	},
	plugins: [],
};
