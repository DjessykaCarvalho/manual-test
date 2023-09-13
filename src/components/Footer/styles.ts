import { mediumText, smallText } from '@/styles/sharedStyles'
import { styled } from 'styled-components'

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.COLORS.grandfather60};
  position: relative;
  padding-top: 73px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    padding-top: 50px;
  }
`

export const ContainerLogo = styled.div`
  position: absolute;
  top: 68px;
  left: 138px;

  img {
    width: 75px;
    height: 75px;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.lg}) {
    left: 5%;

    img {
      width: 50px;
      height: 50px;
    }
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  width: 80%;
  margin: 0 auto 71px auto;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 10% 30px 10%;
    width: auto;
  }
`

export const ContainerList = styled.div`
  width: 174px;
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    width: 120px;
    gap: 5px;
  }
`

export const TitleLink = styled.div`
  ${smallText}
  color: ${({ theme }) => theme.COLORS.father};
  text-transform: uppercase;
`

export const LinkDescription = styled.div`
  ${mediumText}
  color: ${({ theme }) => theme.COLORS.father};
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
  ${mediumText}
  color: ${({ theme }) => theme.COLORS.grandfather30};
  border-top: 1px solid ${({ theme }) => theme.COLORS.grandfatherBackground};
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 25px 0;
`
