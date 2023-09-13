import { StaticImageData } from 'next/image'
import { css, styled } from 'styled-components'

interface IStepContainerProps {
  revert?: string
  backgroundimage: StaticImageData
}

export const StepContainer = styled.div<IStepContainerProps>`
  display: flex;
  gap: 120px;
  background-image: url(${({ backgroundimage }) => backgroundimage.src});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 66%;

  ${({ revert }) =>
    revert === 'true' &&
    css`
      flex-direction: row-reverse;
      background-position-x: 17%;
    `}

  img {
    height: 445px;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 0 10% 25px 10%;
    background-position-y: bottom;
    background-position-x: center;

    img {
      height: 350px;
      width: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.xxs}) {
    img {
      height: 250px;
      width: auto;
    }
  }
`

export const DescriptionContainer = styled.div`
  width: 372px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    width: auto;
  }
`

export const Type = styled.div`
  color: ${({ theme }) => theme.COLORS.grandfather30};
  font-size: ${({ theme }) => theme.FONT.SIZE.small};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.small};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.normal};
  text-transform: uppercase;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.xxlarge};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.semibold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.large};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeSmall};
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    font-size: ${({ theme }) => theme.FONT.SIZE.xlarge};
    line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
  }
`

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.large};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
  margin-top: 22px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    margin-top: 15px;
  }
`
