import { styled } from 'styled-components'

export const ProductContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0 90px 0;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    margin: 30px 0 40px 0;
  }
`
export const Title = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.superlarge};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.semibold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.xlarge};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeMedium};

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    font-size: ${({ theme }) => theme.FONT.SIZE.xxlarge};
  }
`

export const ContainerSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;
  margin-top: 70px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    margin-top: 20px;
    gap: 40px;
  }
`
