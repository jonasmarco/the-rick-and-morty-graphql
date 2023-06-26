import { gql } from '@apollo/client'

export const SEARCH_EPISODES = gql`
  query SearchEpisodes($name: String!) {
    episodes(filter: { name: $name }) {
      results {
        id
        name
        episode
        air_date
        characters {
          id
          name
        }
      }
    }
  }
`
