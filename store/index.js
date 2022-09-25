import create from "zustand";
import { data360, indexImageItem, project } from "../data";

export const useStore = create((set) => ({
  data: data360,
  project: project,
  currentIndex: 0,
  indexImage: indexImageItem,
  photoFunctionStatus: false,
  photoStatus: null,
  fullScreen: null,
  autoRotate: false,
  cameraZoom: 50,
  modal: false,
  showLocations: false,
  setShowLocations: () => {
    set((state) => ({
      showLocations: !state.showLocations,
    }));
  },
  setModal: () => {
    set((state) => ({
      modal: !state.modal,
    }));
  },
  setNewArea: (link, id) => {
    set((state) => ({
      currentIndex: link,
    }));
  },
  setNewAreaPrevious: () => {
    set((state) => ({
      currentIndex: state.currentIndex - 1,
    }));
  },
  setNewAreaNext: () => {
    set((state) => ({
      currentIndex: state.currentIndex + 1,
    }));
  },
  setCameraZoomInFunction: () =>
    set((state) => ({
      cameraZoom: state.cameraZoom + 1,
    })),
  setCameraZoomOutFunction: () =>
    set((state) => ({
      cameraZoom: state.cameraZoom - 1,
    })),
  setAutoRotateFunction: () =>
    set((state) => ({
      autoRotate: !state.autoRotate,
    })),
  setTakePhotoToggleFunction: () =>
    set((state) => ({
      photoFunctionStatus: !state.photoFunctionStatus,
    })),
  setTakePhotoToggleTrue: () =>
    set((state) => ({
      photoStatus: true,
    })),
  setTakePhotoToggleFalse: () =>
    set((state) => ({
      photoStatus: false,
    })),
  setFullScreenToggle: () => {
    set((state) => ({
      fullScreen: !state.fullScreen,
    }));
  },
}));
