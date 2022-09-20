import { Flex, HStack, Icon, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { footer, navigation } from '../../data'

const Navigation = () => {
    return (
        <VStack as={'footer'} minH={'120px'}   >
            <HStack width={'full'} marginBottom={4}>
                <Flex flexDir={'column'} width={'full'}>
                    <Link href={'/'} color={'gray.600'} fontSize={22} fontWeight={'bold'} marginBottom={2}>morph</Link>
                    <Text color={'gray.600'} marginBottom={3} maxW={'520px'}>Tasarımlarınıza Vr’ın nasıl yardımcı olabileceğini keşfetmek için bizimle iletişime geçin.</Text>
                    <VStack as={'nav'} display={'flex'} flexDir={'row'} height={'full'} width={'full'}>
                        <Flex as={'ul'} width={'full'}>
                            {footer.map((item) => <Flex key={item.id} as={'li'} paddingRight={2} ><Icon as={item.icon} color={'gray.600'} /> </Flex>)}
                        </Flex>
                    </VStack>
                </Flex>
                <Flex flexDir={'column'} width={'full'} alignItems={'flex-end'} >
                    <Link href={'/'} color={'white'} fontSize={12} fontWeight={'bold'} marginBottom={2}>Menu</Link>
                    <VStack as={'nav'} display={'flex'} flexDir={'column'} height={'full'}>
                        <Flex as={'ul'} flexDir={'column'} width={'full'} alignItems={'flex-end'} >
                            {navigation.map((item) => <Flex key={item.id} paddingLeft={4} as={'li'}   >
                                <Link href={item.url} color={'gray.600'}> {item.label}  </Link></Flex>)}
                        </Flex>
                    </VStack>
                </Flex>
            </HStack>
            <Flex width={'full'} justifyContent={'space-between'} minH={'30px'}>
                <Text color={'gray.600'}>©2022 - Morph</Text>
                <Text color={'gray.600'}>Gizlilik Politikası | Kullanım Koşulları</Text>
            </Flex>
        </VStack>
    )
}

export default Navigation