
"use client"

import { useThree, useFrame } from '@react-three/fiber'
import { Stats, OrbitControls, useHelper } from '@react-three/drei'

import SmoothieInside from './SmoothieInside'

import { useEffect, useRef } from 'react'
import { AxesHelper, DirectionalLightHelper, Object3D } from 'three'
import { smoothstep } from 'three/src/math/MathUtils'


export default function SmoothieScene(props) {

    const { controlOrbit } = props;

    const camera = useThree(state => state.camera)

    //camera.rotation.set([-0.6, 0.6, .4])
    //camera.position.set([3.15, 2.2, 3.2])

    const dirLight = useRef();
    useHelper(dirLight, DirectionalLightHelper, 5);

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
        <directionalLight
            ref={dirLight}
            castShadow
            color="white"
            position={[3, 5, -5]}

            shadow-mapSize-width={1536}
            shadow-mapSize-height={1536}
            shadow-bias={-.0003}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-bottom={-10}
            shadow-camera-top={10}

        />
        <SmoothieInside depth={props.depth} diameter={props.diameter}/>

        <axesHelper/>
        </>
    )
}
