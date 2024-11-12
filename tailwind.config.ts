import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "rsa-amarelo": "#ffdf58",
        "rsa-azul-1": "#03989e",
        "rsa-azul-2": "#003c4f",
        "rsa-cinza": "#f0f0f0",
        "rsa-coral": "#ff6b6b",
      },
      height: {
        'screen-minus-300': 'calc(100vh - 300px)',
      },
    }
  },
  plugins: [],
} satisfies Config;

