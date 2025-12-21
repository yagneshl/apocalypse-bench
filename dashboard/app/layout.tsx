import type { Metadata } from 'next';
import { Geist, Geist_Mono, Raleway } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Apocalypse Bench Dashboard',
  description: 'Benchmark evaluation results for AI safety research',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 h-14">
            <Link
              href="/runs"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-sm font-semibold tracking-tight">
                apocalypse-bench
              </span>
            </Link>
            <nav className="flex items-center gap-4">
              <Link
                href="/runs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Runs
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
