import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'

const lightTheme = theme.getTheme()

const withTheme = BaseComponent => props => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BaseComponent {...props} />
    </ThemeProvider>
  )
}

export default withTheme
