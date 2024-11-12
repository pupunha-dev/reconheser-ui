import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      "rsa-amarelo": "#ffdf58",
      "rsa-azul-1": "#03989e",
      "rsa-azul-2": "#003c4f",
      "rsa-cinza": "#f0f0f0",
      "rsa-coral": "#ff6b6b"
    }
  },
  plugins: [],
} satisfies Config;
