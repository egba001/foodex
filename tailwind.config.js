/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#D87023",
                dark: "#0E0E0E",
                green: "#009F79",
                dark_second: "#1A1A1A",
            },
            fontFamily: {
                pangram: ["Pangram", "sans-serif"], // Add custom font here
            },
            animation: {
                "slide-in": "slide-in 3s ease-out", // Register the custom animation
                "infinite-scroll": "infinite-scroll 25s linear infinite",
            },
            keyframes: {
                "slide-in": {
                    "0%": { transform: "translateX(-10%)", opacity: 0 },
                    "100%": { transform: "translateX(0)", opacity: 1 },
                },
                "infinite-scroll": {
                    from: { transform: "translateX(0%)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [],
};
