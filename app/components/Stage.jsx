"use client"

import { Inter } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import { useMemo } from 'react'

import SmoothieScene from './SmoothieScene'

const inter = Inter({ subsets: ['latin'] })

export default function Stage() {

    const options = useMemo(() => {
        return {
            controlOrbit: false,
            depth: {value: -2, min:-10, max:-0.0001, step:0.1},
            diameter: {value: 5, min: 0, max:10},
            posX: { value: 2.4, min:-10, max:10},
            posY: { value: 2.3, min:-10, max:10},
            posZ: { value: 3.7, min:-10, max:10},
            rotX: { value: -.55, min:-Math.PI, max:Math.PI},
            rotY: { value: .50, min:-Math.PI, max:Math.PI},
            rotZ: { value: .29, min:-Math.PI, max:Math.PI},

        }
    }, [])

    const config = useControls(options)


    return (
        <main className={'grow w-full flex flex-col '}>
            <div className={'w-full'}>
                <Canvas >
                    <SmoothieScene {...config}/>
                </Canvas>
            </div>
        </main>
    )
}
