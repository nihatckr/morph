import React, { Suspense } from "react";
import { VRButton } from "@react-three/xr";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Flex, VStack } from "@chakra-ui/react";
import { FaVrCardboard } from "react-icons/fa";

import LeftButtons from "../StaticVrUi/LeftButtons";
import RightButtons from "../StaticVrUi/RightButtons";
import Scene from "./Scene";
import { useStore } from "../../../store";

const StaticVrSphere = () => {
  // Sahnenin True/False State Durum Bilgisi
  const autoRotate = useStore((state) => state.autoRotate);

  // Lamera Mesafesinin State Durum Bilgisi
  const cameraZoom = useStore((state) => state.cameraZoom);

  return (
    <Flex position={"relative"} width={"100vw"} height={"100vh"}>
      <LeftButtons />
      <RightButtons />
      <VStack>
        <VRButton>
          <FaVrCardboard color='white' />
        </VRButton>
      </VStack>
      <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }} dpr={1.5}>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 0.1]}
            fov={cameraZoom}
            near={0.1}
          />
          <OrbitControls
            enablePan={false}
            enableDamping
            dampingFactor={0.2}
            autoRotate={autoRotate}
            rotateSpeed={-0.5}
          />

          <Scene />
        </Suspense>
      </Canvas>
    </Flex>
  );
};

export default StaticVrSphere;
