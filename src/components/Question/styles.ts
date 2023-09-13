import { styled } from 'styled-components'

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.xxlarge};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.semibold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.large};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeSmall};
`

export const RadioInputOption = styled.input.attrs({ type: 'radio' })`
  margin-right: 8px;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.large};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
`

export const Options = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  min-height: 165px;
  align-items: flex-start;
`
