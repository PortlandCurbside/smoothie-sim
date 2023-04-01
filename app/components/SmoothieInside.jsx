"use client"

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function SmoothieInside(props) {

    const {nodes, materials} = useGLTF('./BLENDERGUTS.gltf')

    const group = useRef();
    const meshRef = useRef();

    console.log(materials)

    let geometry = nodes["Cylinder"].geometry
    let count = geometry.attributes.position.count;

    let material = materials[""] 

    material.color.set(0xFF0000)

    useFrame(( _, delta ) => {
        for(let i = 0; i<count; i++){
            const z = meshRef.current.geometry.attributes.position.getZ(i)
            _.elapsedTime

            meshRef.current.geometry.attributes.position.setY(i, 0)
        }
    })

    return(
        <group ref={group}>
            <mesh ref={meshRef} geometry={nodes.Cylinder.geometry} material={materials['']} />
        </group>
    )

}
