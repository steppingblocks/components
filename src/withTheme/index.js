import React from 'react'
import { Box, ThemeProvider } from '@xstyled/styled-components'

/**
 * Sample theme with some sane defaultss
 */
const sampleTheme = {
  colors: {
    background: '#FFFFFF',
    black: '#000000',
    border: '#D9D9D9',
    disabled: 'rgba(0, 0, 0, 0.25)',
    error: '#DC2E48',
    heading: 'rgba(0, 0, 0, 0.85)',
    link: '#5099DE',
    primary: '#3FA9FF',
    accent: '#FF9551',
    secondary: 'rgba(0, 0, 0, 0.45)',
    success: '#26ff79',
    text: 'rgba(0, 0, 0, 0.65)',
    warning: '#66310f'
  },
  fontWeights: {
    bold: 600,
    bolder: 800,
    light: 300,
    regular: 500
  },
  shadows: {
    shadow: '0px 0px 4px rgba(0, 0, 0, 0.15)'
  }
}

/**
 * Function that takes a sample theme and creates a HOC
 * that provides the theme to xstyled components
 * @param {Object} theme Sample theme
 */
const createThemeHOC = (theme = sampleTheme) => BaseComponent => props => {
  return (
    <ThemeProvider theme={theme}>
      <Box as={BaseComponent} {...props} />
    </ThemeProvider>
  )
}

export const withTheme = createThemeHOC(sampleTheme)
export const withThemeCreator = createThemeHOC
