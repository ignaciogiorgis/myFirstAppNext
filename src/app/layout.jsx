import Banner from '../../Components/Banner'
import Navigation from '../../Components/Navigation'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden h-screen">
        <Banner />
        {children}
      </body>
    </html>
  )
}
