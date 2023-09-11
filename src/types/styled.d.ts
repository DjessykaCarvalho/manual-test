import 'styled-components'
import { theme } from '../styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type ColorName = keyof typeof theme.COLORS
