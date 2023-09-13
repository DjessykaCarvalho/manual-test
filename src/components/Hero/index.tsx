'use client'

import Image from 'next/image'
import {
  ContainerInfo,
  ContainerLogo,
  HeroContainer,
  Subtitle,
  Title,
  TitleContainer
} from './styles'
import logo from '@/assets/svg/logo.svg'
import Button from '@/commons/Button'
import { heroStrings } from '@/data/heroStrings'

interface IHeroProps {
  handleOpenQuiz(): void
}

const Hero = ({ handleOpenQuiz }: IHeroProps) => {
  return (
    <HeroContainer>
      <ContainerLogo>
        <Image src={logo} alt='' />
      </ContainerLogo>
      <ContainerInfo>
        <TitleContainer>
          <Title>{heroStrings.title}</Title>
          <Subtitle>{heroStrings.subtitle}</Subtitle>
        </TitleContainer>
        <div>
          <Button label='Take the quiz' onClick={handleOpenQuiz} />
        </div>
      </ContainerInfo>
    </HeroContainer>
  )
}

export default Hero
