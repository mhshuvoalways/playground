module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit", // build hote onk somoy lage dev mode a that's why we will use jit.
  purge: ["./src/**/*.{html,js}"], // ekhane path bole dite hobe j kon kon file a tailwind css use kora hoyese baki gula fele dibe. jit enable korle path bole dite hobe.
  theme: {
    // colors: {
    //   gray: {
    //     300: "#000000",
    //   }, // colors object replace hoa gese
    // },
    extend: {
      colors: {
        myColor: {
          300: "#000000",
          // DEFAULT: "#000000"//eta default mane text-gray likhele amara ei color ta pabo
        }, // colors object replace hobe na
      },
    },
  },
  plugins: [],
};
