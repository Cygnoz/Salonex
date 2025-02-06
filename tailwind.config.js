// Path: tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(128.45deg, #FFE8C0 0.21%, #B5DBDB 114.69%)',
        'custom-gradient2': 'linear-gradient(133.34deg, #FFD07B -13.05%, #8AE4B8 138.88%)',
      },
      colors: {
        
        heading:"#0B1320",
        subHeading:"#818894",

        primary_main: '#C96E76',
        primary_hover: '#B5636A',
        primary_active: '#A1585E',
        primary_disabled: '#F7E9EA',

        secondary_main: '#FAF1F1',
        secondary_hover: '#F7E9EA',
        secondary_active: '#EED2D5',
        secondary_disabled: '#F7E9EA',

        tertiary_main: '#EBEBEB',
        tertiary_hover: '#E0E0E0',
        tertiary_active: '#BEC3C9',
        tertiary_disabled: '#EAECEE',

        fourthiary_main: '#2C3E50',
        fourthiary_hover: '#1A2530',
        fourthiary_active: '#262626',
        fourthiary_disabled: '#EAECEE',
       
        outlineButton_tertiary: "#2C3E50",
        outlineButton_secondary: "#C96E76",


        text_primary:"#303F58",
        text_secondary:"#4B5C79",
        text_tertiary:"#495160",
        text_fourthiry:"#0B1320"

      },
  
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }
  ],
}
