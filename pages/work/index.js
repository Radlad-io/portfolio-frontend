import { getWorks } from '@lib/api'
import styled from 'styled-components';


import Container from '@components/Layout/Container'
import Header from '@components/Header'
import Layout from '@components/Layout/Layout'

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`

const ColStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Grid2Style = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`

const ItemStyle = styled.div`
  display: inline-grid;
`

export default function Home({ works }) {
  return (
    <Layout>
      <Container>
        <Header title='Work' emoji='🛠️' />
        <GridStyle>
          <ColStyle>
            Left
          </ColStyle>
          <ColStyle>
          <Grid2Style>
            <ItemStyle>01</ItemStyle>
            <ItemStyle>02</ItemStyle>
            <ItemStyle>03</ItemStyle>
            <ItemStyle>04</ItemStyle>
          </Grid2Style>
          </ColStyle>
        </GridStyle>
      </Container>
    </Layout>
  )
}


export async function getStaticProps(){
  // const works = await getWorks()
  console.log(works)
  return {
    props: {
      works
    }
  }
}