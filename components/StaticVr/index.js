
import { useState } from 'react'
import StaticVrSphere from './StaticVrSphere'



const StaticVr = ({ data }) => {

  const [image, setImage] = useState(data)

  const indexImageItem = image.map((item) => item)

  const [currentIndex, setCurrentIndex] = useState(0)


  const leftButton = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? indexImageItem.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)

  }
  const rightButton = () => {
    const isLastImage = currentIndex === 0
    const newIndex = isLastImage ? indexImageItem.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  return (
    <StaticVrSphere />
  )
}

export default StaticVr