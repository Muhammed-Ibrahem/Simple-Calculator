/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Spartan: ["League Spartan"],
      },
      colors: {
        //TEXT
        DText: "hsl(var(--Very-dark-grayish-blue) / <alpha-value>)",
        LText: "hsl(var(--Very-dark-grayish-yellow) / <alpha-value>)",

        // MainBg;
        DbgColor: "hsl(var(--DMainBg) / <alpha-value>)",
        LbgColor: "hsl(var(--LMainBg) / <alpha-value>)",

        //CalcBody
        DCalcBody: "hsl(var(--DCalcBody) / <alpha-value>)",
        LCalcBody: "hsl(var(--LCalcBody) / <alpha-value>)",

        //Screen
        DScreen: "hsl(var(--ScreenDark) / <alpha-value>)",
        LScreen: "hsl(var(--ScreenLight) / <alpha-value>)",

        //Keys
        DKey: "hsl(var(--DKey) / <alpha-value>)",
        DKeyShadow: "hsl(var(--DKeyShadow) / <alpha-value>)",
        Red: "hsl(var(--Red) / <alpha-value>)",
        DarkRed: "hsl(var(--Dark-red) / <alpha-value>)",
        DKeyBg: "hsl(var(--Light-grayish-orange) / <alpha-value>)",
        DKeyShadowOrange: "hsl(var(--Grayish-orange) / <alpha-value>)",

        Orange: "hsl(var(--Orange) / <alpha-value>)",
        LKey: "hsl(var(--LKey) / <alpha-value>)",
        LKeyShadow: "hsl(var(--LKeyShadow) / <alpha-value>)",
        Orange: "hsl(var(--Orange) / <alpha-value>)",
        DarkOrange: "hsl(var(--Dark-orange) / <alpha-value>)",
        LKeyBg: "hsl(var(--Light-grayish-yellow) / <alpha-value>)",
        LKeyShadowOrange: "hsl(var(--Dark-grayish-orange) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
