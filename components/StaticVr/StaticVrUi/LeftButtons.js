import { IconButton, Tooltip, VStack } from '@chakra-ui/react'
import { VRButton } from '@react-three/xr'

import { FaDesktop, FaVrCardboard } from 'react-icons/fa'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'

const LeftButtons = () => {
    return (
        <VStack left={0} position='absolute' zIndex={'1'} height={'full'} padding={2} alignItems={'center'} bgColor={'rgba(0, 0, 0, 0.5)'} >

            <Tooltip hasArrow bg='gray.500' label='İleri' >
                <IconButton aria-label='Pc' icon={<MdArrowForwardIos color='white' />} variant={'ghost'} _hover={{
                    bgColor: 'none'
                }} />
            </Tooltip><Tooltip hasArrow bg='gray.500' label='Geri'>
                <IconButton aria-label='Pc' icon={<MdArrowBackIosNew color='white' />} variant={'ghost'} _hover={{
                    bgColor: 'none'
                }} />
            </Tooltip>
        </VStack>
    )
}

export default LeftButtons