import './globals.css'

export const metadata = {
  title: 'Smoothie Sim',
  description: 'Blend before you buy.',
}

export default function RootLayout({ children }) {
return (
    <html lang="en">
        <body className='w-full flex flex-col items-center'>
            {children}
        </body>
    </html>
    )
}
