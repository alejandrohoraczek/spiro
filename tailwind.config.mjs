/** @type {import('tailwindcss').Config} */
const fluidType = (minFont, maxFont) => {
  return `clamp(${minFont}rem, calc(${minFont}rem + ${
    maxFont - minFont
  } * ((100vw - 20rem) / (96 - 20))), ${maxFont}rem)`;
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "ag-md": ["ITC Avant Garde Std Md", "sans-serif"],
        "ag-bk": ["ITC Avant Garde Std Bk", "sans-serif"],
        cg: ["Century Gothic", "sans-serif"],
        aw: ["Audiowide", "sans-serif"],
        pjs: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        accent: "rgb(237, 221, 183)",
        gray: "rgb(207, 207, 207)",
        gray_2: "rgb(180, 180, 180)",
        gray_3: "rgb(132, 132, 132)",
        dark: "rgb(16, 12, 9)",
        menu: "rgb(18, 14, 10)",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(180deg, #120E0A 0%, rgba(18, 14, 10, 0) 20%, rgba(18, 14, 10, 0) 73.5%, #120E0A 100%)",
        "gradient-cta":
          "linear-gradient(90deg, #FCC440 0%, #F6D17A 32.5%, #F8CD68 67.5%, #FCC440 100%)",
        "gradient-separator":
          "linear-gradient(  to right,  #120E0A 0%,  #CFCFCF 50%,  #120E0A 100%)",
        "select-arrow":
          "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" fill=\"rgb(255,255,255)\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"%3E%3Cpath stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\" /%3E%3C/svg%3E')",
      },
      fontSize: {
        "fluid-18px": "clamp(1.125rem, 1.5vw, 2rem)",
        "fluid-24px": "clamp(1.5rem, 2.5vw, 3rem)",
        "fluid-2": fluidType(1, 2),
      },
      wordSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".trim": {
          display: "inline-block",
          "&::before, &::after": {
            content: '""',
            display: "block",
            height: 0,
          },
          "&::before": {
            marginTop: "-0.4em",
          },
          "&::after": {
            marginBottom: "-0.4em",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ addUtilities, theme }) {
      const newUtilities = Object.entries(theme("wordSpacing")).map(
        ([key, value]) => {
          return {
            [`.word-spacing-${key}`]: { wordSpacing: value },
          };
        }
      );
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
