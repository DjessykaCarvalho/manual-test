import { styled } from 'styled-components'

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.COLORS.grandfather60};
  position: relative;
  padding-top: 73px;
`

export const ContainerLogo = styled.div`
  position: absolute;
  top: 68px;
  left: 138px;

  img {
    width: 75px;
    height: 75px;
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  width: 80%;
  margin: 0 auto 71px auto;
`

export const ContainerList = styled.div`
  width: 174px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`

export const TitleLink = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.small};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.small};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.normal};
  text-transform: uppercase;
`

export const LinkDescription = styled.div`
  color: ${({ theme }) => theme.COLORS.father};
  font-size: ${({ theme }) => theme.FONT.SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
  cursor: pointer;
`

export const ContainerIcons = styled.div`
  display: flex;
  gap: 22px;

  img {
    cursor: pointer;
  }
`

export const FooterText = styled.div`
  color: ${({ theme }) => theme.COLORS.grandfather30};
  font-size: ${({ theme }) => theme.FONT.SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
  border-top: 1px solid ${({ theme }) => theme.COLORS.grandfatherBackground};
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 25px 0;
`
