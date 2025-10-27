import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterOne from '@/components/shared/footer/FooterOne';
import { interTight } from '@/utils/font';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata = {
  title: 'Homepage Project - pelstack',
  description: 'A modern SaaS homepage built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Fix mobile scrolling issues
              (function() {
                if (typeof window !== 'undefined') {
                  // Force remove any scroll locks on mobile
                  if (window.innerWidth < 1024) {
                    document.addEventListener('DOMContentLoaded', function() {
                      document.documentElement.style.overflow = 'visible';
                      document.documentElement.style.height = 'auto';
                      document.body.style.overflow = 'visible';
                      document.body.style.height = 'auto';
                      document.body.style.position = 'relative';
                      
                      // Monitor and fix any attempts to lock scroll
                      const observer = new MutationObserver(function() {
                        if (window.innerWidth < 1024) {
                          const bodyStyle = document.body.style;
                          if (bodyStyle.overflow === 'hidden' || bodyStyle.position === 'fixed') {
                            bodyStyle.overflow = 'visible';
                            bodyStyle.position = 'relative';
                            bodyStyle.width = '';
                            bodyStyle.top = '';
                          }
                        }
                      });
                      observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
                    });
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${interTight.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <SmoothScrollProvider>
              <NavbarOne
                className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
                btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
                megaMenuColor="!bg-background-4 dark:!bg-background-9"
              />
              {children}
              <FooterOne />
            </SmoothScrollProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
