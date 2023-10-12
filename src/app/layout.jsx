import Banner from '../../Components/Banner'
import Navigation from '../../Components/Navigation'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Banner />
        {children}
      </body>
    </html>
  )
}
