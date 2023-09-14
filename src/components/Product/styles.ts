'use client'

import { superlargeText, xxlargeText } from '@/styles/sharedStyles'
import { styled } from 'styled-components'

export const ProductContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0 90px 0;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    margin: 30px 0 40px 0;
  }
`
export const Title = styled.div`
  ${superlargeText};
  color: ${({ theme }) => theme.COLORS.father};

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    ${xxlargeText};
  }
`

export const ContainerSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;
  margin-top: 70px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINTS.md}) {
    margin-top: 20px;
    gap: 40px;
  }
`
