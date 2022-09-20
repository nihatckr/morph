export const styles = {
    global: (props) => ({

        'html, body': {
            fontSize: 'sm',
            color: props.colorMode === 'dark' ? 'white' : 'gray.600',
            lineHeight: 'tall',
            margin: '0px',
            paddinf: '0px'
        },
        div: {
            borderRadius: 'sm'
        }
    })
};