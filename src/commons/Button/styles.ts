import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.COLORS.son};
  cursor: pointer;
`
export const Label = styled.span`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`
