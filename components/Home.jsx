import Link from "next/link"
import React from "react"
import {Icon, Text} from "@chakra-ui/react"
import {GoHome} from "react-icons/go"

const Homelink = (props) => {
    const {text} = props
    return (
        <Link href="/">
            <Text cursor="pointer" as="a" fontWeight="semibold" textDecoration="underline">
                <Icon as={GoHome}/> {text ? text : "Meep"} <Icon as={GoHome}/>
            </Text>
        </Link>
    )
}

export default Homelink