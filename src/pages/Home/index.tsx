'use client'

import Hero from '@/components/Hero'
import { HomeContainer } from './styles'
import Product from '@/components/Product'

const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <Product />
    </HomeContainer>
  )
}

export default HomePage
