import { gql } from '@apollo/client'

export const GET_EPISODES = gql`
  query {
    episodes {
      results {
        id
        name
        air_date
        episode
        characters {
          name
        }
      }
    }
  }
`
