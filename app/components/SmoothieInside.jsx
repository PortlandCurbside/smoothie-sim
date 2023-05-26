"use client"

import { MeshWobbleMaterial, useGLTF  } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { DoubleSide, DataTexture, RedFormat, LuminanceFormat, Vector3, CylinderGeometry } from 'three'


function vortex(x, y, depth, diameter){
    // returns z coord
    const vort = (1/depth)*Math.pow(Math.E, -diameter*Math.pow(
        Math.sqrt(Math.pow(x,2)+Math.pow(y, 2)),
    2))
    
    return vort
}

export default function SmoothieInside(props) {

    const { depth, diameter} = props;


    const group = useRef();
    const plane = useRef();
    const { gl } = useThree();

    
    useEffect(()=> {
        console.log(plane.current.attributes.position.count)

    }, [])

    const format = ( gl.capabilities.isWebGL2 ) ? RedFormat : LuminanceFormat;

    const colors = new Uint8Array(5);

    for ( let c = 0; c <= colors.length; c ++ ) {
        colors[ c ] = ( c / colors.length ) * 256;
    }

    const gradientMap = new DataTexture( colors, colors.length, 1, format );
    gradientMap.needsUpdate = true;


    useFrame(( { clock } ) => {
        // generate Sin matrix and matrix transform it
        const count = plane.current.attributes.position.count
        const damping = 0.75

        const time = clock.getElapsedTime();

        for(let i=0; i<count; i++){
            // Current point
            let x = plane.current.attributes.position.getX(i);
            let y = plane.current.attributes.position.getY(i);
            let z = plane.current.attributes.position.getZ(i);
            
            // current_normal of vertex
            let x_norm = plane.current.attributes.normal.getX(i);
            let y_norm = plane.current.attributes.normal.getY(i);
            let z_norm = plane.current.attributes.normal.getZ(i);

            let point = new Vector3(x, y, z)
            let normal = new Vector3(x,  y, z)
            
            let center_dist = 0.1*Math.sqrt(Math.pow(x, 2) + Math.pow(y,2))
            let angle = Math.atan2(y, x)
            
            let wave_transform = new Vector3(
                x,
                y,
                center_dist * Math.sin(4*angle+time*.5)+vortex(x, y, depth, diameter)
            ) // direction of wave 

            point = wave_transform

            let new_z = center_dist*0.1*Math.sin(4*angle+time*.5)
        
            //plane.current.attributes.position.setZ(i, new_z+vortex(x, y, depth, diameter))
            plane.current.attributes.position.setXYZ(i, point.x, point.y, point.z)
        }
        plane.current.computeVertexNormals()
        plane.current.attributes.position.needsUpdate=true

    })

    return(
        <>
        <mesh position={[0, -4, 0]}>
            <cylinderGeometry args={[5,  3,  10, 128, 10, true, 0, 2*Math.PI]}/>
            <meshToonMaterial side={DoubleSide} receiveShadow castShadow
                color={"#FF6978"} gradientMap={gradientMap} wireframe={false} />
        </mesh>
        <mesh ref={group} rotation={[-Math.PI/2,0,0]}>
            <planeBufferGeometry
                ref={plane}
                args={[10, 10, 100, 100]}/>
            <meshToonMaterial side={DoubleSide} receiveShadow castShadow
                color={"#FF6978"} gradientMap={gradientMap} wireframe={false} />
        </mesh>
        </>
    )

}
