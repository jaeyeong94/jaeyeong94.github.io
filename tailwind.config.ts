import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Noto Sans SC',
          'Noto Sans JP',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        bg: 'oklch(var(--bg) / <alpha-value>)',
        'bg-subtle': 'oklch(var(--bg-subtle) / <alpha-value>)',
        surface: 'oklch(var(--surface) / <alpha-value>)',
        border: 'oklch(var(--border) / <alpha-value>)',
        fg: 'oklch(var(--text) / <alpha-value>)',
        'fg-muted': 'oklch(var(--text-muted) / <alpha-value>)',
        'fg-subtle': 'oklch(var(--text-subtle) / <alpha-value>)',
        accent: {
          1: 'oklch(var(--accent-1) / <alpha-value>)',
          2: 'oklch(var(--accent-2) / <alpha-value>)',
          primary: 'oklch(var(--accent-1) / <alpha-value>)',
          secondary: 'oklch(var(--accent-2) / <alpha-value>)',
        },
      },
      maxWidth: {
        prose: '38rem',
        readable: '42rem',
        wide: '100rem',
      },
    },
  },
  plugins: [],
};

export default config;
