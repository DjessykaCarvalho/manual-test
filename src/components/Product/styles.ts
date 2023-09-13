import { styled } from 'styled-components'

export const ProductContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0 90px 0;
`
export const Title = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.superlarge};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.semibold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.xlarge};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeMedium};
`

export const ContainerSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;
  margin-top: 70px;
`
