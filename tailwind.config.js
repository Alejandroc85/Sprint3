/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      josefin: ['Belanosima', 'sans-serif'],
    },
    
    extend: {
      backgrounds: {
        'bgone':' background-image:url("./icon-check.svg"),linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)),border-radius: 50%;;'

      },
      colors: {

        //primary for hover
        brightBlue:'#3a7bfd',
        BlueGradient:'#57ddff',
        PinkGradient:'#c058f3',
  
      // //   // light theme
        veryLightGray: '#fafafa',
        veryLightGrayish:'#e4e5f1',
        lightGrayishBlue:'#d2d3db',
        veryDarkGrayishBlue:'#484b6a',
  
           // dark theme
        VeryDarkBlueDM: '#161722',
        VeryDarkDesaturatedBlueDM:'#25273c',
        LightGrayishBlueDM:    '#cacde8',
        LightGrayishBlueHoverDM:'#e4e5f1',
        DarkGrayishBlueDM:'#777a92',
        VeryDarkGrayishBlueDM:'    #4d5066',
        VeryDarkGrayishBlue2DM:'#393a4c'
       },
      backgroundImage: {
        'Mobile-Light': "url('./src/assets/images/bg-mobile-light.jpg')",
        'Mobile-Dark': "url('./src/assets/images/bg-mobile-dark.jpg')",
        'Desktop-Light': "url('./src/assets/images/bg-desktop-light.jpg')",
        'Desktop-Dark': "url('./src/assets/images/bg-desktop-dark.jpg')",      
      },
    },
  },
  plugins: [],
    darkMode:"class"



}

