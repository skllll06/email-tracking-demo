/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		// 背景色 (黒)
		colors: {
			background: '#121212', // ダークグレーの背景
			white: '#FFFFFF',
			primary: {
				50: '#E8F5E9', // Light Green
				100: '#C8E6C9',
				200: '#A5D6A7',
				300: '#81C784',
				400: '#66BB6A',
				500: '#4CAF50', // Default Green
				600: '#43A047',
				700: '#388E3C',
				800: '#2E7D32',
				900: '#1B5E20', // Dark Green
			},
			gray: {
				50: '#FAFAFA',
				100: '#F5F5F5',
				200: '#EEEEEE',
				300: '#E0E0E0',
				400: '#BDBDBD',
				500: '#9E9E9E',
				600: '#757575',
				700: '#616161',
				800: '#424242',
				900: '#212121',
			},
		},
		fontFamily: {
			sans: ['YuGothic', 'Noto Sans JP', 'sans-serif'],
		},
		plugins: [],
	},
};
