'use client'

import { ttNormsScript } from '@/assets/fonts'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyle from '@/styles/globalStyles'
import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

interface IRootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html className={ttNormsScript.className}>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
