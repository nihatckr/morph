
import React, { useEffect } from 'react'

import { Preload } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

import { Controllers, Hands, XR, } from '@react-three/xr'
import Portals from './Portals'
import { useStore } from '../../../store'

const Scene = () => {
    const gl = useThree((state) => state.gl)
    const photoStatus = useStore(state => state.photoStatus)

    const setPhoto = () => {
        const link = document.createElement('a')
        link.setAttribute('download', 'canvas.png')
        link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
        link.click()
    }

    useEffect(() => {
        if (photoStatus === true) {
            setPhoto()
        } if (photoStatus === false) {
            setPhoto()
        }
    }, [photoStatus])

    return (
        <XR>
            <Controllers />
            <Hands />
            <Preload all />
            <Portals />
        </XR>


    )
}

export default Scene