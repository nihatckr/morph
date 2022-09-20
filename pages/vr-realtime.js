import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/Layout'


const StaticVr360 = () => {
    return (
        <Layout>
            <VStack width={'full'}>
                <video width="920" height="500" autoPlay muted loop>
                    <source src="/Sanal_Gerceklik.mp4" type="video/mp4" />
                </video>
                <VStack width={'full'} justifyContent={'center'} alignItems={'center'}>
                    <Heading>
                        Vr Realtime
                    </Heading>
                    <Text textAlign={'center'}>
                        Gerçek zamanlı VR çözümleri, kullanıcının bir sanal gerçeklik alanı içinde fiziksel olarak hareket etmesine ve gelecekteki projeleri daha önce mümkün olmayan bir şekilde keşfetmesine olanak tanır. Brick'in bir oyun motoru tarafından çalıştırılan gerçek zamanlı VR görselleştirmesi, kullanıcının hareketi ve kontrolü ile eş zamanlı olarak işleniyor. Bu şekilde gerçekçi bir ortama etkileşimli olarak dahil olabilir, ayrıntılarını, ferahlığını ve genel hissini keşfedebilirsiniz. tuğla | gerçek zamanlı VR, gerçek hayattaki ayarlamalara kıyasla tasarımlarda kararlar ve değişiklikler almanın en sürükleyici ve ilgi çekici yoludur. Hem mimarlar hem de geliştiriciler, özel yapım Brick | gerçek zamanlı VR hizmeti.
                        İlk   oluşturmak için bizimle iletişime geçin | GERÇEK ZAMANLI VR deneyimi!
                    </Text>
                </VStack>
            </VStack>

        </Layout>
    )
}

export default StaticVr360