module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "blanc-background": "#ffffff",
        "blanc-vert-title": "#f4faf3",
        "vert-pastel-deco": "#c4dcbe",
        "vert-moyen-deco": "#84b777",
        "vert-kaki-elements-importants": "#6f934d",
        "marron-deco": "#b9b48d",
        "vert-fonce-typographie": "#2d3924",
        "vert-fluo-bouton": "#45d475",
        "base-vert": "#a1d9aa"
      },

      "fontSize": {
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "2xl": "1.875rem",
        "3xl": "2.25rem",
        "4xl": "2.8125rem",
        "5xl": "3.125rem"
       },

       "fontFamily": {
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
        "asap": "Asap",
        "poppins": "Poppins"
       },
       
       "borderRadius": {
        "none": "0",
        "xs": "0.0625rem",
        "sm": "0.25rem",
        "default": "0.3125rem",
        "lg": "0.403940886259079rem",
        "xl": "0.41215652227401733rem",
        "2xl": "0.49802249670028687rem",
        "3xl": "0.5rem",
        "4xl": "0.5858209133148193rem",
        "5xl": "0.625rem",
        "6xl": "0.9375rem",
        "7xl": "0.9473793506622314rem",
        "8xl": "1.0693172216415405rem",
        "9xl": "1.121323585510254rem",
        "10xl": "1.1224489212036133rem",
        "11xl": "1.125rem",
        "12xl": "1.245420217514038rem",
        "13xl": "1.25rem",
        "14xl": "1.3125rem",
        "15xl": "1.6360620260238647rem",
        "16xl": "1.667360544204712rem",
        "17xl": "1.75rem",
        "18xl": "1.875rem",
        "19xl": "2.0147273540496826rem",
        "20xl": "2.0625rem",
        "21xl": "3rem",
        "22xl": "3.375rem",
        "23xl": "4.325874328613281rem",
        "24xl": "5.976675510406494rem"
       },
       keyframes: {
        BackInRight: {
          '0%, 100%': { transform: 'translate(100px)'},
          '100%': { transform: 'translate(0px)' },
        }
      }
    },

  },
  plugins: [],
}
