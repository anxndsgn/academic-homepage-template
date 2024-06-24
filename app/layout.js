import { Inter, JetBrains_Mono, EB_Garamond } from 'next/font/google';
import { fontStyle } from '@/website.config';
import './globals.css';
import { websiteInfo } from '@/website.config';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
});

const serif = EB_Garamond({
  subsets: ['latin'],
});

const font = {
  sans: inter,
  serif: serif,
  mono: mono,
}[fontStyle];

export const metadata = {
  title: websiteInfo.title,
  description: websiteInfo.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-neutral-50 dark:bg-neutral-800`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
