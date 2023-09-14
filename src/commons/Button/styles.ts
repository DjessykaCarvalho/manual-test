import { smallText } from '@/styles/sharedStyles'
import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.COLORS?.son};
  cursor: pointer;
`
export const Label = styled.span`
  ${smallText};
  color: ${({ theme }) => theme.COLORS?.white};
  text-transform: uppercase;
`
