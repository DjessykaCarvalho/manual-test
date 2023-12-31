'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Quiz from '@/components/Quiz'

const HomePage = () => {
  const [openQuiz, setOpenQuiz] = useState<boolean>(false)

  const handleOpenQuiz = () => setOpenQuiz(true)

  const handleCloseQuiz = () => setOpenQuiz(false)

  return !openQuiz ? (
    <>
      <Hero handleOpenQuiz={handleOpenQuiz} />
      <Product />
      <Footer />
    </>
  ) : (
    <Quiz handleClose={handleCloseQuiz} />
  )
}

export default HomePage
