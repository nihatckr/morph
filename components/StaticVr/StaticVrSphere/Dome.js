import React from "react";
import * as THREE from "three";

import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useStore } from "../../../store";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Dome = () => {
  // Tüm proje bilgileri
  const data = useStore((state) => state.data);

  // Proje bilgilerinin mevcut index bilgisi
  const currentIndex = useStore((state) => state.currentIndex);

  // Id bilgisiyle filter Uygulanarak ilgili Görsele Gidilir
  const setNewArea = useStore((state) => state.setNewArea);

  // Lokasyon Gizleme
  const showLocations = useStore((state) => state.showLocations);

  //Proje bilgileri
  const { url, detail } = data[currentIndex];

  // Threejs Sahnesindeki Küreye Uygulanan Texture Dosyası
  const map = useLoader(THREE.TextureLoader, url);

  return (
    <group>
      <mesh>
        <sphereGeometry args={[800, 120, 60]} />
        <meshBasicMaterial map={map} side={THREE.BackSide} />
      </mesh>
      {showLocations
        ? detail.map((item) => {
            const { position, link, id, name } = item;
            return (
              <Html position={position} key={id}>
                <motion.div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setNewArea(link, id)}
                  animate={{
                    y: [5, 0, 5],
                    scale: [1.2, 1, 1.2],
                  }}
                  /*    transition={{ type: "spring", stiffness: 400, damping: 10 }} */
                  transition={{
                    repeat: Infinity,
                    repeatType: "spring",
                    duration: 1.4,
                  }}
                >
                  <FaMapMarkerAlt color='white' size={40} />
                </motion.div>
                <h1 className='heading'> {name}</h1>
              </Html>
            );
          })
        : null}
    </group>
  );
};

export default Dome;
