'use client'

import HomePage from '@/pages/Home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manual'
}

function Home() {
  return <HomePage />
}

export default Home
