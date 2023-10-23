import App from "@/components/App"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jang Shop",
  description: "Jang shop with next.js, mongodb, tailwind",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  )
}
