/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
      {
        pattern: /bg-(green|blue|gray)-(400|700)/,
      },{
        pattern: /from-(green|blue|gray)-(400|700)/,
      },{
        pattern: /to-(green|blue|gray)-(400|700)/,
      },
    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
