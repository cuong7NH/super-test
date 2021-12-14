import React from 'react'
import ThemeProvider from './providers/ThemeProvider/ThemeProvider'
import { lightTheme, darkTheme } from './theme'
import './index.css'
import { useAppSelector } from './app/hooks'
import { selectThemeProvider } from './providers/ThemeProvider/themeProviderSlice'
import { THEME_OPTIONS } from './constant'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {routes} from './routes'
import Login from './pages/Login/Login'

const App = () => {
  const themeProvider = useAppSelector(selectThemeProvider)
  // @ts-ignore
  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('jwt') ||
        sessionStorage.getItem('jwt') ||
        sessionStorage.getItem('jwt') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )

  return (
    <ThemeProvider theme={themeProvider.theme === THEME_OPTIONS.DARK ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <ProtectedRoute
                key={index}
                path={route.path}
                exact={true}
                component={route.component}
              />
            );
          })}

          <Route
            exact
            path={'/login'}
            component={Login}
          />
        </Switch>
      </BrowserRouter>

    </ThemeProvider>
  )
}

App.propTypes = {}

export default App