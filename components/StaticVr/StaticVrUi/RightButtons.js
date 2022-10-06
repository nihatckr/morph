import { IconButton, Tooltip, VStack } from "@chakra-ui/react";

import {
  MdCameraAlt,
  MdFullscreen,
  MdLayers,
  MdRotateRight,
  MdZoomIn,
  MdZoomOut,
} from "react-icons/md";
import { GrMap } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import { useStore } from "../../../store";

const RightButtons = () => {
  // Zustand Tam Ekran Fonksiyonu
  const setFullScreenToggle = useStore((state) => state.setFullScreenToggle);

  // Zustand Plan Gösterme Fonksiyonu

  const setModal = useStore((state) => state.setModal);

  // Zustand Lokasyon Gizleme Fonksiyonu

  const setShowLocations = useStore((state) => state.setShowLocations);

  // Zustand Yakınlaştırma Fonksiyonu
  const setCameraZoomOutFunction = useStore(
    (state) => state.setCameraZoomOutFunction
  );

  // Zustand Uzaklaştırma Fonksiyonu
  const setCameraZoomInFunction = useStore(
    (state) => state.setCameraZoomInFunction
  );

  // Zustand Fotoğraf Çekme Olumsuz Durum Stateti
  const setTakePhotoToggleFalse = useStore(
    (state) => state.setTakePhotoToggleFalse
  );
  // Zustand Fotoğraf Çekme Olumlu Durum Stateti
  const setTakePhotoToggleTrue = useStore(
    (state) => state.setTakePhotoToggleTrue
  );
  // Zustand Fotoğraf Çekme Olumlu  Fonksiyonu
  const setTakePhotoToggleFunction = useStore(
    (state) => state.setTakePhotoToggleFunction
  );

  // Zustand Fotoğraf Çekme Güncel State Durumu
  const photoFunctionStatus = useStore((state) => state.photoFunctionStatus);

  // Zustand Tam Ekran  Güncel State Durumu
  const fullScreen = useStore((state) => state.fullScreen);

  // Tam Ekran Fonksiyonu
  const toggleFullScrenn = () => {
    // initial state null durumunda
    setFullScreenToggle();
    // Bu fonksiyondan sonra true durumuna geçip tam ekran hale gelir

    //
    if (fullScreen === true) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
      });
    }
  };
  // Render Alma Fonksiyonları
  // true ve false durumlarına göre iki fonksiyon
  const togglePhotoTrue = () => {
    setTakePhotoToggleTrue();
    setTakePhotoToggleFunction();
  };
  const togglePhotoFalse = () => {
    setTakePhotoToggleFalse();
    setTakePhotoToggleFunction();
  };

  return (
    <VStack
      right={0}
      position='absolute'
      zIndex={"1"}
      height={"full"}
      padding={2}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <VStack>
        <Tooltip hasArrow label='Tam Ekran'>
          <IconButton
            aria-label='Tam Ekran'
            color={"gray.800"}
            onClick={toggleFullScrenn}
            icon={<MdFullscreen />}
            variant={"ghost"}
          />
        </Tooltip>
        <Tooltip hasArrow bg='gray.500' label='Fotoğraf Çek'>
          <IconButton
            aria-label='Kamera'
            color={"gray.800"}
            onClick={photoFunctionStatus ? togglePhotoFalse : togglePhotoTrue}
            icon={<MdCameraAlt />}
            variant={"ghost"}
          />
        </Tooltip>

        <Tooltip hasArrow bg='gray.500' label='Lokasyon'>
          <IconButton
            aria-label={"Lokasyon"}
            color={"gray.800"}
            onClick={setShowLocations}
            icon={<ImLocation2 />}
            variant={"ghost"}
          />
        </Tooltip>
      </VStack>
      <VStack>
        {/* <Tooltip hasArrow bg='gray.500' label='Malzeme Değiştir'>
          <IconButton
            aria-label={"Malzeme Değiştir"}
            icon={<MdLayers color='white' />}
            variant={"ghost"}
            _hover={{
              bgColor: "none",
            }}
          />
        </Tooltip> */}
        <Tooltip hasArrow bg='gray.500' label='Yakınlaştır'>
          <IconButton
            aria-label='Yakınlaştır'
            color={"gray.800"}
            onClick={setCameraZoomInFunction}
            icon={<MdZoomIn />}
            variant={"ghost"}
          />
        </Tooltip>
        <Tooltip hasArrow bg='gray.500' label='Uzaklaştır'>
          <IconButton
            aria-label='Uzaklaştır'
            color={"gray.800"}
            onClick={setCameraZoomOutFunction}
            icon={<MdZoomOut />}
            variant={"ghost"}
          />
        </Tooltip>
      </VStack>
    </VStack>
  );
};

export default RightButtons;
