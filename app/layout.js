import './globals.css'

export const metadata = {
  title: 'Smoothie Sim',
  description: 'Blend before you buy.',
}

export default function RootLayout({ children }) {
return (
    <html lang="en">
        <body className='w-full flex flex-col items-center'>
            <h1 className='text-3xl'> Kyle and Chris&apos; eatmyass on the double ultimate smoothie simulator </h1>
            {children}
        </body>
    </html>
    )
}
