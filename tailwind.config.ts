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
        'blue-pattern': "url('/path/to/blue-pattern.png')",
        'red-pattern': "url('/path/to/red-pattern.png')",
        'yellow-pattern': "url('/path/to/yellow-pattern.png')",
      },
    },
  },
  plugins: [],
};
export default config;
