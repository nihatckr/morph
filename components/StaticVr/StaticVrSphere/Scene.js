import React, { useEffect } from "react";

import { Preload } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { Controllers, Hands, XR } from "@react-three/xr";
import Portals from "./Portals";
import { useStore } from "../../../store";

const Scene = () => {
  // Fotoğraf Çekme
  const gl = useThree((state) => state.gl);

  // Fotoğraf Çekme Durum Bilgisi
  const photoStatus = useStore((state) => state.photoStatus);

  // Fotoğraf Çekme Fonksiyonu
  const setPhoto = () => {
    const link = document.createElement("a");
    link.setAttribute("download", "canvas.png");
    link.setAttribute(
      "href",
      gl.domElement
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    link.click();
  };

  // Fotoğraf Çekme Fonksiyonunun Çalıştırılması useThree kullanılabilmesi için useEffect kullanıldı alternatif bakılabilir
  useEffect(() => {
    if (photoStatus === true) {
      setPhoto();
    }
    if (photoStatus === false) {
      setPhoto();
    }
  }, [photoStatus]);

  return (
    <XR>
      <Controllers />
      <Hands />
      <Preload all />
      <Portals />
    </XR>
  );
};

export default Scene;
