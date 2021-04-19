// TOOLS
import Head from 'next/head'

// COMPONENTS
import Layout from '@components/Layout/Layout'
import Container from '@components/Layout/Container'
import Header from '@components/Header'


export default function Home() {
  return (
    <div>
      <Layout>
        <Container>
          <br />
          <br />
          <Header title='Home' emoji='🏠' />
        </Container>
      </Layout>
    </div>
  )
}
