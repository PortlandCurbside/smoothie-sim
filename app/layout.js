import './globals.css'
import Footer from './components/Footer'

export const metadata = {
  title: 'Smoothie Sim',
  description: 'Blend before you buy.',
}

export default function RootLayout({ children }) {
return (
    <html lang="en">
        <body className='w-full flex flex-col min-h-screen'>
            <h1 className='
                transition-all
                text-4xl p-2 w-full text-center
                md:text-4xl md:p-2
                lg:text-5xl lg:p-3
                xl:text-left xl:text-6xl xl:p-3
            '>Smoothie Simulator</h1>
            {children}
            <Footer />
        </body>
    </html>
    )
}
