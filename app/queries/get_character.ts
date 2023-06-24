import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query ($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
        image
        status
        species
        gender
        origin {
          name
        }
        episode {
          episode
        }
      }
    }
  }
`
