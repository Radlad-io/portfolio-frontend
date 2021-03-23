import React, { useState } from 'react'
import Container from '../components/Layout/Container'
import Menu from '../components/Menu'
import { motion } from "framer-motion"


export default function Home() {
  return (
    <>
      <Menu />
      <Container>
        <h1>Jawn Page</h1>
      </Container>
    </>
  )
}
