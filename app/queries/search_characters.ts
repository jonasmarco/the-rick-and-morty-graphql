import { gql } from '@apollo/client'

export const SEARCH_CHARACTERS = gql`
  query SearchCharacters($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        status
        species
        gender
        image
        origin {
          name
        }
        location {
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`
