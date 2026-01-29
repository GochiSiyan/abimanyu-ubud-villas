/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
      colors: {
        border: 'var(--color-border)', /* brown-600/20 */
        input: 'var(--color-input)', /* stone-50 */
        ring: 'var(--color-ring)', /* brown-600 */
        background: 'var(--color-background)', /* cream-50 */
        foreground: 'var(--color-foreground)', /* brown-900 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* brown-600 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* green-900 */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* stone-50 */
          foreground: 'var(--color-muted-foreground)', /* brown-700 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* gold-500 */
          foreground: 'var(--color-accent-foreground)', /* brown-900 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* stone-50 */
          foreground: 'var(--color-popover-foreground)', /* brown-900 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* stone-50 */
          foreground: 'var(--color-card-foreground)', /* brown-900 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* green-600 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* orange-600 */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
      },
      fontFamily: {
        headline: ['Crimson Text', 'serif'],
        body: ['Source Serif Pro', 'serif'],
        cta: ['Optima', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      boxShadow: {
        'temple': '0 4px 20px rgba(44, 24, 16, 0.08)',
        'gentle': '0 2px 8px rgba(44, 24, 16, 0.04)',
        'cultural': '0 8px 32px rgba(139, 69, 19, 0.15)',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "slide-in": "slide-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
}