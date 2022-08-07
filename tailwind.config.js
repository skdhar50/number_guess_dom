/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.{html, js}", "./scripts/*.js"],
	theme: {
		extend: {
			fontFamily: {
				mainfont: ["Peralta", 'cursive'],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
