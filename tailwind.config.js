/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "!./node_modules",
    ],
    theme: {
        extend: {
            colors: {
                'vanilla': '#FFEAAE',
                'charcoal': '#3D5467',
                'amber': '#FFC100',
                'dimgray': '#686963',
                'salmon': '#FFA5AB'
            }
        },
    },
    plugins: [],
}

