/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'email': "url('/src/Assets/email.svg')",
        'person': "url('/src/Assets/person.svg')",
        'padlock': "url('/src/Assets/lock.svg')",
      },
    },
  },
  plugins: [],
}

