import { Flex, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { navigation } from '../../data'

const Navigation = () => {
    return (
        <VStack as={'header'} width={'full'} minH={'60px'} flexDir={'row'} justifyContent={'space-between'} >
            <Link href={'/'} color={'gray.800'} >Morph</Link>
            <VStack as={'nav'} display={'flex'} flexDir={'row'} height={'full'}>
                <Flex as={'ul'}>
                    {navigation.map((item) => <Flex key={item.id} paddingLeft={4} as={'li'}><Link href={item.url} color={'gray.800'}  > {item.label} </Link></Flex>)}
                </Flex>
            </VStack>
        </VStack>
    )
}

export default Navigation