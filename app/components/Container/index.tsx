import { type PropsWithChildren } from 'react'

import * as S from './styles'

const Container = ({ children }: PropsWithChildren) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Container
