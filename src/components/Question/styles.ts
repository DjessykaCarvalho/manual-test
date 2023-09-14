'use client'

import { largeText, xxlargeText } from '@/styles/sharedStyles'
import { styled } from 'styled-components'

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Title = styled.div`
  ${xxlargeText};
  color: ${({ theme }) => theme.COLORS.father};
`

export const RadioInputOption = styled.input.attrs({ type: 'radio' })`
  margin-right: 8px;
`

export const RadioLabel = styled.label`
  ${largeText};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.father};
`

export const Options = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  min-height: 165px;
  align-items: flex-start;
`
