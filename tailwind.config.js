/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      keyframes: {
        bounceUp: {
          "0%": { transform: "translateY(1px)" },
          "100%": { transform: "translateY(-50px)" },
        },
        shadowPulse: {
          "0%": { transform: "scaleX(1)", opacity: "0.5" },
          "100%": { transform: "scaleX(0.35)", opacity: "0.5" },
        },
      },
      animation: {
        "bounce-up": "bounceUp 0.6s ease-in-out infinite alternate",
        "shadow-pulse": "shadowPulse 0.6s ease-in-out infinite alternate",
      },
      colors: {
        primary: "#0891b2",
        dark: "#0f172a",
        ungu: "#8400FF",
        FireBrick: "#B22222",
        secondary: "#64748b",
        charcoal: "#201E1F",
        burgundy: "#990134",
        crimson: "#BC3345",
        soft: "#FEE17D",
        biru: "#2844A9",
        kuning: "#C6D334",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
};
