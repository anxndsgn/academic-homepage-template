import { fontStyle } from '@/data/website.config';
import './globals.css';
import { websiteInfo } from '@/data/website.config';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

const fontClasses = {
  sans: 'font-sans',
  serif: 'font-serif',
  mono: 'font-mono',
}[fontStyle];

export const metadata = {
  title: websiteInfo.title,
  description: websiteInfo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${fontClasses} bg-neutral-50 dark:bg-neutral-800`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
