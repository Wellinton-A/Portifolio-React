import styled from 'styled-components'
import { Text } from '.'

export const Title = styled.h3<Text>`
  color: #282a35;
  font-size: ${(prop) => (prop.fontSize ? `${prop.fontSize}px` : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
