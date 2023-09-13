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
    width: 370px;
    height: 445px;
  }
`

export const DescriptionContainer = styled.div`
  width: 372px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.large};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
  margin-top: 22px;
`
