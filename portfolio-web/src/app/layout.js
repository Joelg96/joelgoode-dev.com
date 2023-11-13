import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joel Goode | Portfolio',
  description: 'My name is Joel Goode! Navigate my portfolio to learn more about me, my technical skills, and see some of theprojects I have completed varying from web development to data analysis. Feel free to reach out to me if you have any questions or would like to work together!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
