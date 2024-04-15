/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./web/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 4s linear infinite',
  },
  plugins: [],
}
}
}