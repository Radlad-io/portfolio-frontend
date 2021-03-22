import Head from 'next/head'
import Container from '../components/Layout/Container'
import Menu from '../components/Menu'


export default function Home() {
  return (
    <div>
      <Menu />
      <Container>
        <h1>Home Page</h1>
      </Container>
    </div>
  )
}
