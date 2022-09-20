import { Box, Flex, Image, Text, VStack, Stack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Cards = ({ href, title, subtitle, image }) => {
    return (
        <Stack flexDir={'column'}  >
            <Flex flexDir={'column'} position={'relative'} role={'group'}>
                <Link as={NextLink} href={href}>
                    <Box width={'full'}
                        position={'absolute'}
                        cursor={'pointer'}
                        height={'full'}
                        opacity={0}
                        bgColor={'rgba(0, 0, 0, 0.2)'}
                        _groupHover={{
                            bgColor: 'rgba(0, 0, 0, 0.1)',
                            opacity: 1
                        }}
                        transitionProperty={'all'}
                        transitionDuration={'6ms'}
                        transitionTimingFunction={'ease-out'}

                    />
                </Link>
                <Image src={`/${image}`} alt={title} />
            </Flex>
            <Text fontWeight={'700'} >{title}</Text>
            <Text fontWeight={'300'}>{subtitle}</Text>
        </Stack>
    )
}

export default Cards