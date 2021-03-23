import Container from '../../components/Layout/Container'
import Menu from '../../components/Menu'
import Header from '../../components/Header'

export default function Home() {
  return (
    <div>
      <Menu />
      <Container>
        <Header title='Work' emoji='🛠️' />
      </Container>
    </div>
  )
}
