export const Button = {
    baseStyle: {
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white',

    },
    sizes: {
        xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
        },
    },
    variants: {
        'with-shadow': {
            bg: 'red.400',
            boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: () => ({
            bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
        sm: {
            bg: ' ',
            fontSize: 'md',
            variant: 'ghost',
        },
    },

    defaultProps: {
        size: 'lg',
        variant: 'sm',
    },
} 