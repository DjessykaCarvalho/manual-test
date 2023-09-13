import { styled } from 'styled-components'

export const QuizContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.white};
  display: flex;
  flex-direction: column;
  padding: 20px 60px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    padding: 20px 5%;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 40px;
  justify-content: flex-end;
  margin-top: 10px;
`

export const CloseButton = styled.div`
  font-size: ${({ theme }) => theme.FONT.SIZE.xlarge};
  text-align: end;
  cursor: pointer;
`

export const Message = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.xxlarge};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.large};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeSmall};

  a {
    color: ${({ theme }) => theme.COLORS.grandfatherBackground};
  }
`
