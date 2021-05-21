import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import {getCharacterByID} from "../api/api"
import {Center, Text, Box, Spacer, Icon} from "@chakra-ui/react"
import React from "react"
import {FaKiwiBird, FaOm} from "react-icons/fa"
import Homelink from "../../components/Home"

export default function Char({data}) {
    return (
        <Box p="1rem" bg="gray.100" minH="100vh">
            <Head>
                <title>SSR</title>
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
                        <Icon as={FaKiwiBird} mx="5px"/> Zuruck <Icon as={FaOm} mx="5px"/>
                    </Text>
                </Link>
            </Center>

            <Spacer />
            <Center>
                <Homelink text="Hallo Welt" />
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


