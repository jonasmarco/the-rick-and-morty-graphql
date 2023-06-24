import { Col } from 'antd'
import styled from 'styled-components'

export const ResponsiveTitle = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`

export const ResponsiveMenu = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: flex-end;
  }
`
