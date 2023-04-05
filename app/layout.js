import './globals.css'
import Footer from './components/Footer'

import { Zilla_Slab, Encode_Sans} from 'next/font/google'

export const metadata = {
  title: 'Smoothie Sim',
  description: 'Blend before you buy.',
}

const zilla_slab = Zilla_Slab({ 
    weight: ['300', '400', '500', '600', '700' ],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display:'swap',
    variable:'--font-zilla-slab'
})

const encode_sans = Encode_Sans({ 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ],
    style: ['normal'],
    subsets: ['latin'],
    display:'swap',
    variable:'--font-encode-sans'
})

export default function RootLayout({ children }) {
    return ( <html lang="en" className={`${encode_sans.className} font-light`}>
        <body className='w-full flex flex-col bg-salmon min-h-screen'>
            <h1 className='
                transition-all
                text-5xl p-2 w-full text-center
                py-3
                md:text-5xl md:p-2 md:py-6
                lg:text-5xl lg:p-6 lg:py-10
                xl:text-left xl:text-6xl xl:p-6 xl:py-10
            '>Smoothie Simulator</h1>
            {children}
            <Footer />
        </body>
    </html>
    )
}
