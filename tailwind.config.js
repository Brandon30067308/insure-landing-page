module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(256, 26%, 20%)",
        primaryAlt: "hsl(216, 30%, 68%)",
        primaryDark: "hsl(270, 9%, 17%)",
        grayishViolet: "hsl(273, 4%, 51%)",
        lightGray: "hsl(0, 0%, 98%)",
        attribution: "hsl(228, 45%, 44%)"
      },
      fontFamily: {
        karla: ["karla, sans serif"],
        dmSerif: ["dm serif display, serif"]
      },
      screens: {
        sm: "480px",
        xs: "375px",
        xl: "1440px"
      }
    }
  }
};
