import Image from "next/image"
import Head from "next/head"
import {getCharacterByID} from "../api/api"
import {Center, Text, Box, Spacer} from "@chakra-ui/react"
import React from "react"

export default function Char({data}) {
    return (
        <Box p="1rem" bg="gray.100" minH="100vh">
            <Head>
                <title>sakljdhaslkjdh</title>
            </Head>
            <Center>
                <Text as="h1" fontWeight="extrabold" fontSize={["2rem", "3rem", "4rem", "5rem"]}>
                    {data.props.character.name}
                </Text>
            </Center>

            <Spacer />

            <Center>
                <Text as="a" fontWeight="semibold" textDecoration="underline" href="/">
                    Zuruck
                </Text>
            </Center>

            <Spacer />
            <Center py="1rem">
                <Image src={data.props.character.image} alt="asjhldb" width="600px" height="600px" eager priority/>
            </Center>
        </Box>
    )
}

export async function getServerSideProps({params}) {
    const data = await getCharacterByID(params.id);
    return {
      props: {
        data,
      },
    };
  }


