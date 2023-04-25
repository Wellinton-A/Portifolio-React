import { Paragraph as StyleParagraph } from './style'

export type Text = {
  children: string
  type?: 'main' | 'secondary'
}

const Paragraph = ({ children, type = 'main' }: Text) => (
  <StyleParagraph type={type}>{children}</StyleParagraph>
)

export default Paragraph
