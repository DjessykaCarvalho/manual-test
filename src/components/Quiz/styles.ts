'use client'

import { xlargeText, xxlargeText } from '@/styles/sharedStyles'
import { styled } from 'styled-components'

export const QuizContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS?.white};
  display: flex;
  flex-direction: column;
  padding: 20px 60px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS?.md}) {
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
  ${xlargeText};
  text-align: end;
  cursor: pointer;
`

export const Message = styled.div`
  ${xxlargeText};
  color: ${({ theme }) => theme.COLORS?.father};

  a {
    color: ${({ theme }) => theme.COLORS?.grandfatherBackground};
  }
`
