import { styled } from 'styled-components'

export const QuizContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.white};
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 40px;
  justify-content: flex-end;
  margin-top: 10px;
`

export const CloseButton = styled.div`
  font-size: 25px;
  text-align: end;
  cursor: pointer;
`

export const Message = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: 28px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.84px;

  a {
    color: ${({ theme }) => theme.COLORS.grandfatherBackground};
  }
`
