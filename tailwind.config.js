/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'yandex_pink': '#DC44CD',
                'yandex_yellow': '#faff00',
                'yandex_black': '#111111'
            }
        },
    },
    plugins: [],
}
