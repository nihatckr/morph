import create from "zustand";
import { data360 } from '../data'

const indexImageItem = data360.map((item) => item)

export const useStore = create((set) => ({
  data: data360,
  currentIndex: 0,
  indexImageItem,
  photoFunctionStatus: false,
  photoStatus: null,
  fullScreen: null,
  autoRotate: false,
  cameraZoom: null,
  setCameraZoomInFunction: () => set((state) => ({
    cameraZoom: true
  })),
  setCameraZoomOutFunction: () => set((state) => ({
    cameraZoom: false
  })),
  setAutoRotateFunction: () => set((state) => ({
    autoRotate: !state.autoRotate
  })),
  setTakePhotoToggleFunction: () => set((state) => ({
    photoFunctionStatus: !state.photoFunctionStatus
  })),
  setTakePhotoToggleTrue: () => set((state) => ({
    photoStatus: true,

  })),
  setTakePhotoToggleFalse: () => set((state) => ({
    photoStatus: false,

  })),
  setFullScreenToggle: () => {
    set((state) => ({
      fullScreen: !state.fullScreen
    }
    ))
  },
}))
