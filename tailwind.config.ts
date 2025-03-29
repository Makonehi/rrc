

/** @type {import('tailwindcss').Config} */
export default {
   content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
       "./app/**/*.{js,ts,jsx,tsx}",
   ],
    theme: {
    extend: {
        backgroundColor: {
          fonWhite: 'rgb(246, 246, 246)',
            cart: 'rgb(41, 41, 41, 0.9)',
            bgPhone: 'rgb(239, 239, 239)',
            hoverPhone: 'rgb(180, 180, 180)',
            darkHeader: 'rgb(20, 20, 20)',
            memoryCard: 'rgb(243, 243, 243)',
            memoryBlack: "rgb(27, 26, 26)",
            inputProduct: 'rgb(218, 218, 218, 0.7)',
            darkOpacity: 'rgb(20, 20, 20, 0.8)'
        },
        fontFamily: {
          raleway: "Raleway",
            cormorant: "Cormorant_Unicase",

        },
        colors:{
            headerUl: 'rgb(27,25,25)',
            textDark: 'rgb(20, 21, 21)',
            cartTitle: 'rgb(239, 239, 239)',
            textWhite: 'rgb(255, 255, 255)',
            textMemory: 'rgb(105, 104, 104)',
            microText: 'rgb(157, 151, 151)',
            darkText: 'rgb(20, 20, 20)',
            zero: 'rgb(0, 0, 0)',
        },
        screens: {
            xs: "375px",
            ss: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
    },
},
plugins: [],
}