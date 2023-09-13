import { css } from 'styled-components'

export const smallText = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.small};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.bold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.small};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.normal};
`

export const mediumText = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
`

export const largeText = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.large};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.regular};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
`

export const xlargeText = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.xlarge};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.medium};
`

export const xxlargeText = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.xxlarge};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.semibold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.large};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeSmall};
`

export const superlargeText = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.superlarge};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.semibold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.xlarge};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeMedium};
`

export const giganticText = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.gigantic};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.xlarge};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeMedium};
`

export const xgiganticText = css`
  font-size: ${({ theme }) => theme.FONT.SIZE.xgigantic};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.semibold};
  line-height: ${({ theme }) => theme.FONT.LINE_HEIGHT.xxlarge};
  letter-spacing: ${({ theme }) => theme.FONT.LETTER_SPACING.negativeLarge};
`
