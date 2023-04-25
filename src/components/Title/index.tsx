import { Title as StyleTitle } from './style'

export type Text = {
  children: string
  fontSize?: number
}

const Title = (props: Text) => (
  <StyleTitle fontSize={props.fontSize}>{props.children}</StyleTitle>
)

export default Title
