import StyledComponentsRegistry from '@/lib/registry'

interface IRootLayoutProps {
  children: React.ReactNode
}

function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
