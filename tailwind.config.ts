import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '30': '30px',
        '40': '60px',
        '90': '90px',
        '120': '120px',
        '150': '150px',
      },
      colors: {
        'tooltip-gray': 'rgba(169, 169, 169, 0.937)',
      },
      fontFamily: {
        'special': ['Galaxia', 'Calibri', 'system-ui']
      },
    },
  },
  plugins: [],
};
export default config;

