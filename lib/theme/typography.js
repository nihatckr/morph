export const fonts = {
    heading: 'Raleway',
    body: 'Montserrat, Verdana, sans-serif'
};

export const Heading = {
    sizes: null,
    variants: {
        h1: {
            textStyle: 'h1'
        },
        h2: {
            textStyle: 'h2'
        }
    }
};

export const Text = {
    sizes: null,
    variants: {
        title: (props) => ({
            textStyle: 'title',
            color: props.colorMode === 'light' ? 'neutral.600' : 'neutral.100'
        }),
        subtitle: (props) => ({
            textStyle: 'subtitle',
            color: props.colorMode === 'light' ? 'neutral.600' : 'neutral.100'
        })
    },
    defaultProps: {
        variant: 'body'
    }
};

export const textStyles = {
    h1: {
        fontSize: { base: '32px', lg: '56px' },
        fontWeight: 700,
        lineHeight: { base: '140%', lg: '125%' }
    },
    h2: {
        fontSize: { base: '24px', xl: '36px' },
        fontWeight: 700,
        lineHeight: { base: '150%', lg: '130%' }
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        casing: 'uppercase',
        lineHeight: '150%'
    },
    subtitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        casing: 'uppercase',
        lineHeight: '150%'
    }
};