import { IconButton, Tooltip, VStack } from '@chakra-ui/react'


import { MdCameraAlt, MdFullscreen, MdLayers, MdRotateRight, MdZoomIn, MdZoomOut } from 'react-icons/md'
import { useStore } from '../../../store'

const RightButtons = () => {

    const setFullScreenToggle = useStore(state => state.setFullScreenToggle)

    const setAutoRotateFunction = useStore(state => state.setAutoRotateFunction)

    const setCameraZoomOutFunction = useStore(state => state.setCameraZoomOutFunction)

    const setCameraZoomInFunction = useStore(state => state.setCameraZoomInFunction)

    const setTakePhotoToggleFalse = useStore(state => state.setTakePhotoToggleFalse)
    const setTakePhotoToggleTrue = useStore(state => state.setTakePhotoToggleTrue)
    const setTakePhotoToggleFunction = useStore(state => state.setTakePhotoToggleFunction)

    const photoStatus = useStore(state => state.photoStatus)
    const photoFunctionStatus = useStore(state => state.photoFunctionStatus)

    const fullScreen = useStore(state => state.fullScreen)

    const toggleFullScrenn = () => {

        setFullScreenToggle()
        if (fullScreen === true) {
            document.exitFullscreen()
        }
        else {
            document.documentElement.requestFullscreen().catch((e) => {
                console.log(e)
            })
        }
    }

    const togglePhotoTrue = () => {
        setTakePhotoToggleTrue()
        setTakePhotoToggleFunction()
        console.log(photoStatus)
    }
    const togglePhotoFalse = () => {
        setTakePhotoToggleFalse()
        setTakePhotoToggleFunction()
        console.log(photoStatus)
    }

    return (
        <VStack right={0} position='absolute' zIndex={'1'} height={'full'} padding={2} alignItems={'center'} justifyContent={'space-between'} bgColor={'rgba(0, 0, 0, 0.5)'} >
            <VStack>
                <Tooltip hasArrow bg='gray.500' label='Tam Ekran'>
                    <IconButton aria-label='Tam Ekran' onClick={toggleFullScrenn} icon={<MdFullscreen color='white' />} variant={'ghost'} _hover={{
                        bgColor: 'none'
                    }} />
                </Tooltip>
                <Tooltip hasArrow bg='gray.500' label='Fotoğraf Çek' >
                    <IconButton aria-label='Kamera' onClick={photoFunctionStatus ? togglePhotoFalse : togglePhotoTrue} icon={<MdCameraAlt color='white' />} variant={'ghost'} _hover={{
                        bgColor: 'none'
                    }} />
                </Tooltip>
                <Tooltip hasArrow bg='gray.500' label='Döndürme'>
                    <IconButton aria-label='Döndürme' onClick={setAutoRotateFunction} icon={<MdRotateRight color='white' />} variant={'ghost'} _hover={{
                        bgColor: 'none'
                    }} />
                </Tooltip>
            </VStack>
            <VStack>
                {/* <Tooltip hasArrow bg='gray.500' label='Malzeme Değiştir'>
                    <IconButton aria-label={'Malzeme Değiştir'} icon={<MdLayers color='white' />} variant={'ghost'} _hover={{
                        bgColor: 'none'
                    }} />
                </Tooltip> */}
                <Tooltip hasArrow bg='gray.500' label='Yakınlaştır'>
                    <IconButton aria-label='Yakınlaştır' onClick={setCameraZoomInFunction} icon={<MdZoomIn color='white' />} variant={'ghost'} _hover={{
                        bgColor: 'none'
                    }} />
                </Tooltip>
                <Tooltip hasArrow bg='gray.500' label='Uzaklaştır'>
                    <IconButton aria-label='Uzaklaştır' onClick={setCameraZoomOutFunction} icon={<MdZoomOut color='white'
                    />} variant={'ghost'} _hover={{
                        bgColor: 'none'
                    }} />
                </Tooltip>
            </VStack>
        </VStack>

    )
}

export default RightButtons