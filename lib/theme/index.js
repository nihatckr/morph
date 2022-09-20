import { extendTheme } from '@chakra-ui/react'

import { styles } from './styles'
import { colors } from './colors'


const overrides = {
    styles,
    colors,
    components: {

    },
}

export default extendTheme(overrides)