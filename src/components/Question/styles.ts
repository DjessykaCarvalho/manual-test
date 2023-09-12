import { styled } from 'styled-components'

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.84px;
`

export const RadioInputOption = styled.input.attrs({ type: 'radio' })`
  margin-right: 8px;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.father};
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
`

export const Options = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  min-height: 165px;
  align-items: flex-start;
`
