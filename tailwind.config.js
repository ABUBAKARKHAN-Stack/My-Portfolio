module.exports = {
  content: [
    './dist/**/*.html', // Include HTML files in the dist folder and its subdirectories
    './dist/**/*.js'   // Include JS files in the dist folder and its subdirectories
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
