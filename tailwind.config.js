/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        lp3i: {
          '100': '#006CB2',
          '200': '#005F9C',
          '300': '#00568D',
          '400': '#004D7E',
          '500': '#00426D',
          '600': '#00395E',
          '700': '#003354',
          '800': '#002A45',
          '900': '#001E32',
        },
        merah: {
          '100': '#FF7A84',
          '200': '#F15C67',
          '300': '#E35762',
        },
        hijau: {
          '100': '#00AEB6',
          '200': '#009FA6',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

