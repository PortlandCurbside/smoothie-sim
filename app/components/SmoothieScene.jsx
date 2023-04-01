
"use client"

import { useThree, useFrame } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'

import SmoothieInside from './SmoothieInside'

import { useEffect, useRef } from 'react'
import { AxesHelper } from 'three'


export default function SmoothieScene(props) {

    const { controlOrbit } = props;


    const smoothie = useRef();
    const camera = useThree(state => state.camera)

    //camera.rotation.set([-0.6, 0.6, .4])
    //camera.position.set([3.15, 2.2, 3.2])
    //
    console.log(camera.position)
    console.log(camera.rotation)

    useFrame(()=>{
        if(!controlOrbit){
            camera.rotation.set(props.rotX, props.rotY, props.rotZ)
            camera.position.set(props.posX, props.posY, props.posZ)
        }
    });

    return (
        <>
        { controlOrbit ? <OrbitControls/> : <></> }
        <Stats/>
        <ambientLight intensit={.1}/>
        <directionalLight
            color="white"
            position={[3, 5, -5]}
        />
        <SmoothieInside/>

        <axesHelper/>
        </>
    )
}
