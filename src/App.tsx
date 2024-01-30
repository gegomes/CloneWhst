
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styled/theme/default'
import { GlobalStyled } from './styled/global'

import { AuthGoogleProvider } from './Context/AuthContext';
import { AppRoutes } from './Router/routes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthGoogleProvider>
          <AppRoutes/>
      </AuthGoogleProvider>
      <GlobalStyled />
    </ThemeProvider>
  )
}
