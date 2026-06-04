module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00f2fe',
          dark: '#052c30',    
          light: '#7fecff',   
        },
      },
      boxShadow: {
        'neon': '0 0 5px #00f2fe, 0 0 20px rgba(0, 242, 254, 0.6)',
        'neon-strong': '0 0 10px #00f2fe, 0 0 40px #00f2fe',
      }
    },
  },
  plugins: [],
}
