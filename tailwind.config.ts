import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				gold: {
					light: '#f5d680',
					DEFAULT: '#d4af37',
					dark: '#9e7c1e'
				},
				cream: '#FEF7CD',
				warmGray: '#8A898C',
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'dancing': ['Dancing Script', 'cursive'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-gold': {
					'0%, 100%': {
						boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)'
					}
				},
				'border-dance': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
        "zoom-in": {
          "0%": {
            opacity: "0",
            transform: "scale(1.1) translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },
        "slide-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "firework": {
          "0%": {
            transform: "scale(0) translateY(0)",
            opacity: "1"
          },
          "50%": {
            transform: "scale(1) translateY(-50px)",
            opacity: "1"
          },
          "100%": {
            transform: "scale(0.5) translateY(-100px)",
            opacity: "0"
          }
        },
        "sparkle": {
          "0%, 100%": {
            transform: "scale(0) rotate(0deg)",
            opacity: "0"
          },
          "50%": {
            transform: "scale(1) rotate(180deg)",
            opacity: "1"
          }
        },
        "burst": {
          "0%": {
            transform: "scale(0)",
            opacity: "1"
          },
          "50%": {
            transform: "scale(8)",
            opacity: "0.5"
          },
          "100%": {
            transform: "scale(12)",
            opacity: "0"
          }
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in': 'slide-in 1s ease-out',
				'pulse-gold': 'pulse-gold 2s infinite',
				'border-dance': 'border-dance 4s ease infinite',
        "zoom-in": "zoom-in 1.2s ease-out",
        "slide-in-up": "slide-in-up 1.2s ease-out",
        "firework": "firework 3s ease-out forwards",
        "sparkle": "sparkle 4s ease-in-out infinite",
        "burst": "burst 2s ease-out forwards",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
