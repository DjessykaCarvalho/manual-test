import { StaticImageData } from 'next/image'
import { css, styled } from 'styled-components'

interface IStepContainerProps {
  revert?: boolean
  backgroundImage: StaticImageData
}

export const StepContainer = styled.div<IStepContainerProps>`
  display: flex;
  gap: 120px;
  background-image: url(${({ backgroundImage }) => backgroundImage.src});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 66%;

  ${({ revert }) =>
    revert &&
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
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.84px;
  margin-top: 10px;
`

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  margin-top: 22px;
`
