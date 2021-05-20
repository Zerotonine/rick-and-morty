import {gql} from "@apollo/client"
import client from "../../util/apollo-client"

export const getCharacters = async () => {
  const {data} = await client.query({
    query: gql`
      query Characters {
        characters {
          results {
            id
            name
            image
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
};


export const getCharacterByID = async (id) => {
  const {data} = await client.query({
    query: gql`
      query Character {
        character(id: "${id}") {
          name
          image
          gender
        }
      }
    `,
  });

  return {
    props: {
      character: data.character,
    },
  };
};