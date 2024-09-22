/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			fontFamily: {
				para: '"DM Sans", sans-serif'
			},
			fontSize:{
				"32":"2rem",
				"10px":"10px"
			},
			maxWidth:{
				"headerCard":"600px"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				14:"14px"
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					lightblack: "#222932",
					orange: "#FF4E00",
					darkblack: "#101828",
					cream: "#FFFAEB",
					lightblue: "#EBF8FF",
					lightgreen: "#EBFFF8",
					opactiy60: "#FFFFFF99"
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					lightblack: "#101828",
					lightgray: "#F5F5F5",
					black: "#161616",
					darkgray:"#667085",
					lighterblue:"#2A94F1",
					paleblue:"#F5FAFF",
					opactiy60:"#00000099"
				},
				tertiary: {
					gray: "#475467",
					dimgray:"#D0D5DD",
					black:"#101828",
					darkblack:"#344054",
					lightblack:"#1A1A1A",
					lightgray:"#CACBCF",
					lighterblack:"#171717",
					paleblue:"#B2DDFF",
					palelightblue:"#EFF8FF"
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			inset:{
				"18":"18px"
			},
			padding:{
				"10px":"10px"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
