import { SimpleGrid, GridItem, Box } from '@chakra-ui/react'
import React from 'react'
import Cards from '../../components/Cards'
import Layout from '../../components/Layout'
import { project } from '../../data'

const UcyuzAltmis = () => {
    return (
        <Layout >
            <SimpleGrid columns={2} spacing={10}>
                {project.map((proje) => {
                    return (
                        <Cards key={proje.id} href={proje.href} title={proje.title} subtitle={proje.subtitle} image={proje.image} />
                    )
                })}
            </SimpleGrid>
        </Layout>
    )
}

export default UcyuzAltmis