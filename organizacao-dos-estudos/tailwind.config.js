/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens: {
		'tablet': '640px',
		// => @media (min-width: 640px) { ... }
  
		'laptop': '1024px',
		// => @media (min-width: 1024px) { ... }
  
		'desktop': '1280px',
		// => @media (min-width: 1280px) { ... }
	  },
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
		fontFamily: {
			'Geist': ['Geist', 'Georgia']
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
