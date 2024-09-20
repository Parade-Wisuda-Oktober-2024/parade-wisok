import {type Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["variant"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        header: ["var(--font-medieval)"],
        title: ["var(--font-medieval)"],
        "sub-header": ["var(--font-eagle-lake)"],
        "sub-sub-header": ["var(--font-fraunces)"],
        paragraph: ["var(--font-fraunces)"],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: {
          DEFAULT: 'hsl(var(--background))',
          alt: 'hsl(var(--background-alt))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          alt: 'hsl(var(--primary-alt))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          alt: 'hsl(var(--secondary-alt))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          alt: 'hsl(var(--muted-alt))'
        },
        text: {
          DEFAULT: 'hsl(var(--text))',
          alt: 'hsl(var(--text-alt))'
        },

        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      }
    }
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/unbound-method
    plugin(({addBase, addUtilities, addComponents, theme}) => {
      addBase({})
      addUtilities({})
      addComponents({
        ".title": {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
          color: 'transparent',
          fontFamily: theme('fontFamily.title'),
          textTransform: 'uppercase',
          backgroundClip: 'text',
          "-webkit-background-clip": 'text',
          "-webkit-text-fill-color": 'transparent',
          "-webkit-filter": 'drop-shadow(1px 4px 0 var(--tw-shadow-color)) drop-shadow(0 0 10px var(--tw-shadow-color))',
          "filter": 'drop-shadow(1px 4px 0 var(--tw-shadow-color)) drop-shadow(0 0 10px var(--tw-shadow-color))',
          '@screen sm': {
            fontSize: theme('fontSize.4xl')
          },
          '@screen md': {
            fontSize: theme('fontSize.5xl')
          }
        }
      })
    }),
    require("tailwindcss-animate")
  ],
} satisfies Config;
