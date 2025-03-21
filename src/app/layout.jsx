export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body>
        {children}
      </body>
    </html>
  )
}