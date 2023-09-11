import { styled } from 'styled-components'
import heroBackground from '@/assets/images/HeroBackground.png'

export const HeroContainer = styled.div`
  background-image: url(${heroBackground.src});
  background-size: cover;
  background-repeat: no-repeat;
  height: 750px;
  display: flex;
  align-items: center;
  position: relative;
`

export const ContainerLogo = styled.div`
  position: absolute;
  top: 30px;
  left: 138px;
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 468px;
  margin-left: 138px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: 90px;
  font-style: normal;
  font-weight: 600;
  line-height: 90px;
  letter-spacing: -2.7px;
`

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`
