/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#5F3C80',
        'light-lavender': '#F5EFFF',
        'muted-purple': '#CDC1FF',
        'soft-gray': '#B0B0B0',
        'deep-plum': '#6A4C8C',
        'soft-purple-shadow': '#D1C1F0',
        'charcoal-gray': '#333333',
        'white': '#FFFFFF',
        'peach': '#F9D8B4'
      },
      backgroundImage: {
        'purple-palette': 'linear-gradient(135deg, #F5EFFF 0%, #E5D9F2 40%, #CDC1FF 70%, #A294F9 100%)',
      },
      boxShadow: {
        'md-purple': '0 4px 6px -1px rgba(100, 89, 189, 0.1), 0 2px 4px -1px rgba(100, 89, 189, 0.06)',
      },
    },
  },
  plugins: [],
};

