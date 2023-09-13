import { styled } from 'styled-components'
import heroBackground from '@/assets/images/HeroBackground.png'

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
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.xgigantic};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.semibold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.xxlarge};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeLarge};

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    font-size: ${({ theme }) => theme.FONT.SIZE.gigantic};
    line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.xlarge};
    letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeMedium};
  }
`

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.large};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    font-size: ${({ theme }) => theme.FONT.SIZE.medium};
    line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
  }
`
