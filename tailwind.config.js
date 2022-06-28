module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"  
  ],
  theme: {
    extend: {
      fontFamily: {
        "league": ["'Montserrat'"]
      },
      backgroundImage: {
        'mates': "url('/public/images/card-mate.jpg')",
        'materas': "url('/public/images/card-matera.jpg')",
        'bombillas': "url('/public/images/card-bombilla.jpg')",
        'termos': "url('/public/images/card-termo.jpg')",
      },
      transitionProperty: {
        right: "right"
      }
    },

  },
  plugins: [
   
  ],
}