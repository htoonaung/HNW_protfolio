module.exports = {
  content: ["./*","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'body': '#272727',
        'selected-text': '#FFAA69',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#777777'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },

    plugins: [
        require('flowbite/plugin')
    ]

}
