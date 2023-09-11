'use client'

import Hero from '@/components/Hero'
import { HomeContainer } from './styles'
import Hair from '@/components/Hair'

const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <Hair />
    </HomeContainer>
  )
}

export default HomePage
