import { Layout, Typography } from 'antd'
const { Footer } = Layout
const { Link } = Typography

const CustomFooter = () => (
  <Footer style={{ textAlign: 'center' }}>
    <p>Rick and Morty GraphQL</p>
    <p>
      Data provided by the{' '}
      <Link href="https://rickandmortyapi.com/graphql" target="_blank">
        Rick and Morty API
      </Link>
    </p>
  </Footer>
)

export default CustomFooter
