import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { GitHubSection } from './style'

const About = () => {
  return (
    <section>
      <Title fontSize={16}>About Me</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
        amet nesciunt aspernatur ipsa est error quasi molestiae, harum dolorum
        sint non architecto omnis quidem tenetur in. Quasi, laboriosam maiores.
      </Paragraph>
      <GitHubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=Wellinton-A&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Wellinton-A&layout=compact&langs_count=7&theme=dracula" />
      </GitHubSection>
    </section>
  )
}

export default About
