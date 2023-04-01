"use client"

import { Inter } from 'next/font/google'
import { Canvas } from '@react-three/fiber'

import Stage from './components/Stage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
        <main className={'w-full flex flex-col '}>
            <Stage/>
        </main>
    )
}
