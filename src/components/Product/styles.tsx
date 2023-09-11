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
  font-size: 40px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -1.2px;
`

export const ContainerSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;
  margin-top: 70px;
`
