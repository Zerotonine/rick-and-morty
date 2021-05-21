import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Box, Container, Text, Wrap, WrapItem, Switch, Center} from "@chakra-ui/react"
import {getCharacters} from "./api/api"
import React, {useState} from "react"

export default function Home({data}) {
  const [chars, setChars] = useState(data.props.characters);
  const [staticPage, setStaticPage] = useState(false);

  return (
    <div>
      <Head>
        <title>Hier kreativen Titel einfügen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box overflow="hidden" bg="orange.200" minH="100vh">
        <Container>
          <Text
            as="h1"
            color="orange.900"
            fontWeight="semibold"
            mb="1rem"
            textAlign="center"
            textDecoration="underline"
            fontSize={["3xl", "4xl", "5xl", "5xl"]}
          >
            Ich bin eine Gurke!
          </Text>
          <Center>
            <Text mb="1rem" mx="5px">load static pages?</Text>
            <Switch size="lg" onChange={() => setStaticPage(!staticPage)} mb="1rem"/>
          </Center>
        </Container>

        <Wrap px="1.2rem" spacing={4} justify="center">
          {chars.map((char) => (
            <WrapItem
              key={char.id}
              boxShadow="base"
              rounded="15px"
              overflow="hidden"
              bg="red.200"
              lineHeight="0"
              _hover={{boxShadow: "4px 4px 10px 3px #615136"}}
            >
              <Link href={staticPage ? `/static/${char.id}` : `/characters/${char.id}`}>
                <a>
                  <Image src={char.image} alt={char.name} width="400px" height="400px"/>
                  {/* <img src={char.image} alt={char.name} width="400px" height="400px" /> */}
                </a>
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await getCharacters();
  return {
    props: {
      data,
    },
  };
}