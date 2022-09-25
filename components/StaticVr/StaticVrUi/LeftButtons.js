import {
  IconButton,
  Modal,
  Tooltip,
  VStack,
  Button,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { useEffect } from "react";

import {
  MdArrowForwardIos,
  MdArrowBackIosNew,
  MdRotateRight,
} from "react-icons/md";

import { useToast } from "@chakra-ui/react";

import { useStore } from "../../../store";

import { GrClose } from "react-icons/gr";

const LeftButtons = () => {
  // Modal State
  const modal = useStore((state) => state.modal);

  // Modal Fonksiyon
  const setModal = useStore((state) => state.setModal);

  // Bir Sonraki Mekan Görseline Ulaşmak için Kullanılan Fonksiyon
  const setNewAreaNext = useStore((state) => state.setNewAreaNext);

  // Bir Önceki Mekan Görseline Ulaşmak için Kullanılan Fonksiyon
  const setNewAreaPrevious = useStore((state) => state.setNewAreaPrevious);

  // Toplam array uzunluk bilgisi alınmak için kullanılıyor.
  const data = useStore((state) => state.data);

  // Mevcut array index bilgisi
  const currentIndex = useStore((state) => state.currentIndex);

  // Zustand Otomatik Döndürme Fonksiyonu
  const setAutoRotateFunction = useStore(
    (state) => state.setAutoRotateFunction
  );

  // Uyarı Bilgisi
  const toast = useToast({
    position: "bottom-left",
    title: "İlk Görsel",
    isClosable: true,
    status: "error",
    containerStyle: {
      width: "200px",
      maxWidth: "100%",
    },
  });
  // Uyarı Bilgisi
  const toast2 = useToast({
    position: "bottom-left",
    title: "Son Görsel",
    isClosable: true,
    status: "error",
    containerStyle: {
      width: "200px",
      maxWidth: "100%",
    },
  });

  // Render Çakışmalarının engellenmesi için kullanılan fonksiyon

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (currentIndex < 0) {
      setNewAreaNext(lastIndex);
      toast();
    }
    if (currentIndex > lastIndex) {
      setNewAreaPrevious(0);
      toast2();
    }
  }, [currentIndex]);

  return (
    <VStack
      left={0}
      position='absolute'
      zIndex={"1"}
      height={"full"}
      padding={2}
      alignItems={"center"}
    >
      <Modal isOpen={modal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Button variant={"unstyled"} mr={3} onClick={setModal}>
              <GrClose />
            </Button>
          </ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <Tooltip hasArrow bg='gray.500' label='İleri'>
        <IconButton
          aria-label='Pc'
          onClick={setNewAreaNext}
          color={"gray.100"}
          icon={<MdArrowForwardIos />}
          variant={"ghost"}
        />
      </Tooltip>
      <Tooltip hasArrow bg='gray.500' label='Geri'>
        <IconButton
          aria-label='Pc'
          onClick={setNewAreaPrevious}
          color={"gray.100"}
          icon={<MdArrowBackIosNew />}
          variant={"ghost"}
        />
      </Tooltip>
      <Tooltip hasArrow bg='gray.500' label='Döndürme'>
        <IconButton
          aria-label='Döndürme'
          color={"gray.100"}
          onClick={setAutoRotateFunction}
          icon={<MdRotateRight />}
          variant={"ghost"}
        />
      </Tooltip>
    </VStack>
  );
};

export default LeftButtons;
