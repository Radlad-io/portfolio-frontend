import React, { useState } from 'react'
import Container from '../components/Layout/Container'
import Menu from '../components/Menu'
import { motion } from "framer-motion"


export default function Home() {
  return (
    <>

        <h1>Jawn</h1> 

        <div
          className='test'
          animate={{ scale: 0.5 }} 
        />


      <style jsx>{`

        .test{
          width: 100px;
          height: 100px;
          background-color: red;
        }

      `}
      </style>
    </>
  )
}
