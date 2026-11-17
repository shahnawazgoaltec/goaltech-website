import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#FDB45B", dark: "#E39A3F" },
        ink: { DEFAULT: "#000000", card: "#0B0B0D", line: "#2A2A2E" },
        cream: "#FAF7F2",
      },
      fontFamily: { sans: ["var(--font-poppins)", "system-ui", "sans-serif"] },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
export default config;
