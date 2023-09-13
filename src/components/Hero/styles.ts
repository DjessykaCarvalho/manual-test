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
  font-size: ${({ theme }) => theme.FONT.SIZE.gigantic};
  font-style: normal;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.semibold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.xxlarge};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeLarge};
`

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.large};
  font-style: normal;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
`
