import { gql } from '@apollo/client'

export const SEARCH_LOCATIONS = gql`
  query SearchLocations($name: String!) {
    locations(filter: { name: $name }) {
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
        }
      }
    }
  }
`
