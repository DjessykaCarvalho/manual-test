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
          <Title>Be good to yourself</Title>
          <Subtitle>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </Subtitle>
        </TitleContainer>
        <div>
          <Button label='Take the quiz' onClick={handleOpenQuiz} />
        </div>
      </ContainerInfo>
    </HeroContainer>
  )
}

export default Hero
