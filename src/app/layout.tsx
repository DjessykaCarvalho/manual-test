interface IRootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
