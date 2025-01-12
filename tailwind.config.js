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

      },
      backgroundImage:{
        jema:"url(../02-images/jema.png)",
        profile:"url(../../01-pages/01-03-signin/02-images/iconamoon_profile-light.svg)",
        hero_pattern:"linear-gradient(to top, rgba(255, 255, 255, 1), rgba(159, 178, 255, 1))",
        password:"url(../../01-pages/01-03-signin/02-images/jam_key.svg)"
      },
      backgroundPosition: {
        'left-top': 'left top',
        'left-center': 'left center',
        'left-bottom': 'left bottom',
        'right-top': 'right top',
        'right-center': 'right center',
        'right-bottom': 'right bottom',
        'center-top': 'center top',
        'center-center': 'center center',
        'center-bottom': 'center bottom',
      },
    },
  },
  plugins: [],
}

