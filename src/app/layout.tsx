import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthenticationProvider } from '@/context/authenticateWork'
import StyledComponentsRegistry from '@/lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Soluções-360',
  description: 'Adiquira agora, seu desempenho na empresa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthenticationProvider>
        <body className={inter.className}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </AuthenticationProvider>
    </html>
  )
}
