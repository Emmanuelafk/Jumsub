/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Include all HTML files in the root directory
    './**/*.html', // Include all HTML files in subdirectories
    './11-resources/01-css/**/*.css', // Include all CSS files in the specified directory
  ],
  theme: {
    extend: {
      colors:{
        primary:"#001F8A",
        gradient1:"rgba(255, 255, 255, 1)",
        gradient2:"rgba(159, 178, 255, 1)",
        nav1:"#FFFFFF",
        nav2:"#F7F7F7",
        gradient3:"#FCFCFC",
        navshadow:"#9FB2FF1A",
        prices:"#F7F7F7",
        mobile:"#BBCD04",
        hero_pattern:"linear-gradient(to top, rgba(255, 255, 255, 1), rgba(159, 178, 255, 1))"
      },
      backgroundImage:{
        
      }
    },
  },
  plugins: [],
}

