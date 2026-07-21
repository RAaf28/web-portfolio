import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Rafly Enggar Tiarso | Portfolio',
  description: 'Portfolio website for Rafly Enggar Tiarso, built with React, Tailwind, and Next.js.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}