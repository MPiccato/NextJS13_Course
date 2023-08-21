import NavBar from '../components/Navbar'

export const metadata = {
  title: 'Mi tienda',
  description: 'Aprendiendo NetxJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
