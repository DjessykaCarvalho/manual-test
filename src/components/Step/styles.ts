import {
  largeText,
  smallText,
  xlargeText,
  xxlargeText
} from '@/styles/sharedStyles'
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
  ${smallText}
  color: ${({ theme }) => theme.COLORS.grandfather30};
  text-transform: uppercase;
`

export const Title = styled.div`
  ${xxlargeText}
  color: ${({ theme }) => theme.COLORS.father};
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    ${xlargeText}
  }
`

export const Subtitle = styled.div`
  ${largeText}
  color: ${({ theme }) => theme.COLORS.father};
  margin-top: 22px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    margin-top: 15px;
  }
`
