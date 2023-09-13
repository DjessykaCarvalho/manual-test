import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.COLORS.son};
  cursor: pointer;
`
export const Label = styled.span`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT.SIZE.small};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.small};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.normal};
  text-transform: uppercase;
`
