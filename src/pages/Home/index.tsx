'use client'

import Hero from '@/components/Hero'
import { HomeContainer } from './styles'
import Product from '@/components/Product'
import Footer from '@/components/Footer'

const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <Product />
      <Footer />
    </HomeContainer>
  )
}

export default HomePage
