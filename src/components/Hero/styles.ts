import { styled } from 'styled-components'
import heroBackground from '@/assets/images/HeroBackground.png'
import {
  giganticText,
  largeText,
  mediumText,
  xgiganticText
} from '@/styles/sharedStyles'

export const HeroContainer = styled.div`
  background-image: url(${heroBackground.src});
  background-repeat: no-repeat;
  height: 750px;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    height: 600px;
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.xl}) {
    background-size: cover;
  }
`

export const ContainerLogo = styled.div`
  position: absolute;
  top: 30px;
  left: 138px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    left: 10%;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 468px;
  margin-left: 138px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    margin-left: 0;
    padding: 0 10%;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.span`
  ${xgiganticText}
  color: ${({ theme }) => theme.COLORS.father};

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    ${giganticText}
  }
`

export const Subtitle = styled.span`
  ${largeText}
  color: ${({ theme }) => theme.COLORS.father};

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    ${mediumText}
  }
`
