import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'],
        display: ['Cinzel', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ember: "hsl(var(--ember))",
        fire: "hsl(var(--fire))",
        blood: "hsl(var(--blood))",
        gold: "hsl(var(--gold))",
        smoke: "hsl(var(--smoke))",
        ash: "hsl(var(--ash))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "25%, 75%": { opacity: "0.9" },
        },
        "ember-float": {
          "0%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) translateX(20px) scale(0)", opacity: "0" },
        },
        "ember-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 10px hsl(var(--ember) / 0.5), 0 0 20px hsl(var(--ember) / 0.3)",
            opacity: "0.7"
          },
          "50%": { 
            boxShadow: "0 0 20px hsl(var(--ember) / 0.8), 0 0 40px hsl(var(--ember) / 0.5)",
            opacity: "1"
          },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        "smoke-rise": {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0.3" },
          "100%": { transform: "translateY(-50px) scaleX(1.5)", opacity: "0" },
        },
        "torch-flicker": {
          "0%, 100%": { 
            filter: "brightness(1)",
            transform: "scale(1) rotate(0deg)"
          },
          "25%": { 
            filter: "brightness(1.2)",
            transform: "scale(1.02) rotate(1deg)"
          },
          "50%": { 
            filter: "brightness(0.9)",
            transform: "scale(0.98) rotate(-1deg)"
          },
          "75%": { 
            filter: "brightness(1.1)",
            transform: "scale(1.01) rotate(0.5deg)"
          },
        },
        "reveal-up": {
          "0%": { transform: "translateY(60px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "border-glow": {
          "0%, 100%": { 
            borderColor: "hsl(var(--ember) / 0.3)",
            boxShadow: "inset 0 0 20px hsl(var(--ember) / 0.1)"
          },
          "50%": { 
            borderColor: "hsl(var(--ember) / 0.6)",
            boxShadow: "inset 0 0 30px hsl(var(--ember) / 0.2)"
          },
        },
        "mystical-pulse": {
          "0%, 100%": { 
            opacity: "0.2",
            transform: "scale(1)"
          },
          "50%": { 
            opacity: "0.4",
            transform: "scale(1.1)"
          },
        },
        "float-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "flicker": "flicker 3s ease-in-out infinite",
        "ember-float": "ember-float 8s ease-out infinite",
        "ember-glow": "ember-glow 2s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "smoke-rise": "smoke-rise 3s ease-out infinite",
        "torch-flicker": "torch-flicker 0.5s ease-in-out infinite",
        "reveal-up": "reveal-up 0.8s ease-out forwards",
        "border-glow": "border-glow 3s ease-in-out infinite",
        "mystical-pulse": "mystical-pulse 6s ease-in-out infinite",
        "float-subtle": "float-subtle 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-ember": "radial-gradient(ellipse at center, hsl(var(--ember) / 0.3) 0%, transparent 70%)",
        "gradient-vignette": "radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;