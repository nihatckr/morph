import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import StaticVr from "../components/StaticVr";
import { data } from "../data";

const StaticVr360 = () => {
  return (
    <Layout>
      <VStack width={"full"}>
        <Flex width={"full"} justifyContent={"center"} margin={"40px"}>
          <StaticVr data={data} />
        </Flex>
        <VStack width={"full"} justifyContent={"center"} alignItems={"center"}>
          <Heading>Demomuzu Tarayıcınızda Deneyin</Heading>
          <Text textAlign={"center"}>
            Tuğla deneyebilirsiniz | WebGL sürümünde VR, yüklemeden
            tarayıcınızda. Tarayıcınızın en son sürümünde çalıştırdığınızdan
            emin olun. Ağ hızınıza bağlı olarak yükleme süresinin bir dakikadan
            uzun sürebileceğini lütfen unutmayın.
          </Text>
        </VStack>
      </VStack>
    </Layout>
  );
};

export default StaticVr360;
