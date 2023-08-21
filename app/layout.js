import NavBar from '../components/Navbar'

import { Roboto } from 'next/font/google';


export const metadata = {
  title: 'Mi tienda',
  description: 'Aprendiendo NetxJs',
}

//estilos con NextJS
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]

})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
