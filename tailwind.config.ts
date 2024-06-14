import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-deep-blue": "#3D52A0",
                "primary-med-blue": "#7091E6",
                "primary-steel": "#8697C4",
                "primary-soft-steel": "#ADBBDA",
                "primary-soft-pink": "#EDE8F5",
            },
        },
    },
    plugins: [],
};
export default config;
