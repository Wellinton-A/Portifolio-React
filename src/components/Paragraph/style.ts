import styled from 'styled-components'
import { Text } from '.'

export const Paragraph = styled.p<Text>`
  color: ${(props) => (props.type === 'main' ? '#282a35' : '#949494')};
  font-size: 14px;
  line-height: 22px;
`
