
import React, { Suspense, useState, useEffect, useRef } from 'react'
import { VRButton, } from '@react-three/xr'
import { OrbitControls, PerspectiveCamera, } from '@react-three/drei'

import { Canvas, useFrame, } from '@react-three/fiber'
import { Flex, VStack } from '@chakra-ui/react'

import LeftButtons from '../StaticVrUi/LeftButtons'
import RightButtons from '../StaticVrUi/RightButtons'
import { FaVrCardboard } from 'react-icons/fa'
import Scene from './Scene'
import { useStore } from '../../../store'


const StaticVrSphere = () => {

  const cameraRef = useRef()

  const autoRotate = useStore(state => state.autoRotate)
  const cameraZoom = useStore(state => state.cameraZoom)

  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    if (cameraZoom === true) {
      setZoom(+1)
    }
    if (cameraZoom === false) {
      setZoom(-1)
    }
  }, [cameraZoom, zoom])

  return (
    <Flex position={'relative'} width={'100vw'} height={'100vh'}>
      <LeftButtons />
      <RightButtons />
      <VStack>
        <VRButton  >
          <FaVrCardboard color='white' />
        </VRButton>
      </VStack>
      <Canvas ref={cameraRef} frameloop="demand">
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 0.1]}
            fov={60}
            zoom={1}
          />
          <OrbitControls enablePan={false} enableDamping dampingFactor={0.2} autoRotate={autoRotate} rotateSpeed={-0.5} />
          <Scene />
        </Suspense>
      </Canvas>

    </Flex>


  )
}

export default StaticVrSphere