import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import {getCharacterByID, getCharacters} from "../api/api"
import {Center, Text, Box, Spacer, Icon} from "@chakra-ui/react"
import React from "react"
import {GoHome} from "react-icons/go"

export default function Char({data}) {
    return (
        <Box p="1rem" bg="gray.100" minH="100vh">
            <Head>
                <title>SSG</title>
            </Head>
            <Center>
                <Text as="h1" fontWeight="extrabold" fontSize={["2rem", "3rem", "4rem", "5rem"]}>
                    {data.props.character.name}
                </Text>
            </Center>

            <Spacer />

            <Center>
                <Link href="/">
                    <Text cursor="pointer" as="a" fontWeight="semibold" textDecoration="underline">
                        <Icon as={GoHome}/> Zuruck <Icon as={GoHome}/>
                    </Text>
                </Link>
            </Center>

            <Spacer />
            <Center py="1rem">
                <Image src={data.props.character.image} alt="asjhldb" width="600px" height="600px" eager priority/>
            </Center>
        </Box>
    )
}

export async function getStaticPaths() {
    const data = await getCharacters();
    const paths = data.props.characters.map((char) => ({
        params: {id: char.id},
    }))

    return {paths, fallback:false}
}

export async function getStaticProps({params}) {
    const data = await getCharacterByID(params.id)
    return {
        props: {
            data
        }
    }
}

// export async function getServerSideProps({params}) {
//     const data = await getCharacterByID(params.id);
//     return {
//         props: {
//             data,
//         },
//     };
// }


