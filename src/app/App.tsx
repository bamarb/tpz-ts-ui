import React from 'react'
import { theme } from '../theme'
import { ThemeProvider } from '@material-ui/styles'
import { TopBar } from './TopBar'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
    </ThemeProvider>
  )
}
