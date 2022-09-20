import React from 'react'
import * as THREE from 'three'
import { Link } from '@chakra-ui/react'
import { Html } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { useStore } from '../../../store'

const Dome = () => {
    const data = useStore(state => state.data)
    const currentIndex = useStore(state => state.currentIndex)

    const { url, position, name } = data[currentIndex]
    const map = useLoader(THREE.TextureLoader, url)
    return (
        <group>
            <mesh>
                <sphereBufferGeometry args={[800, 120, 60]} />
                <meshBasicMaterial map={map} side={THREE.BackSide} />
            </mesh>
            <mesh position={position} >
                <meshBasicMaterial color="white" />
                <Html center>
                    <Link href="#" className='content' >
                        {name}
                    </Link>
                </Html>
            </mesh>
        </group>
    )
}

export default Dome