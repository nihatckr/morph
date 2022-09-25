import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Cards from "../../components/Cards";
import Layout from "../../components/Layout";

import { useStore } from "../../store";

const UcyuzAltmis = () => {
  const data = useStore((state) => state.project);
  return (
    <Layout>
      <SimpleGrid columns={2} spacing={10}>
        {data.map((proje) => {
          return (
            <Cards
              key={proje.id}
              href={proje.href}
              title={proje.title}
              subtitle={proje.subtitle}
              image={proje.image}
            />
          );
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default UcyuzAltmis;
