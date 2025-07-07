import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClientProvider } from '@/components/query-client-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sylver Portfolio',
  description: 'Professional portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryClientProvider>
          <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
            <TooltipProvider>
              <Toaster />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
} 