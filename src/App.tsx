import React, { useEffect } from 'react'
import ThemeProvider from './providers/ThemeProvider/ThemeProvider'
import { lightTheme, darkTheme } from './theme'
import { useAppSelector } from './app/hooks'
import { selectThemeProvider } from './providers/ThemeProvider/themeProviderSlice'
import { THEME_OPTIONS } from './constant'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import {routes} from './routes'
import Login from './pages/Login/Login'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { selectAccountProvider } from './providers/AccountProvider/accountProviderSlice'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  const themeProvider = useAppSelector(selectThemeProvider)
  const accountProvider = useAppSelector(selectAccountProvider)


  useEffect(() => {
    const username = localStorage.getItem('jwt')
    const myAccount = accountProvider.find(account => account.username === username)
    if(!myAccount) {
      localStorage.removeItem('jwt')
    }
  }, [accountProvider])


  // @ts-ignore
  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('jwt') ? (
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
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>

    </ThemeProvider>
  )
}

App.propTypes = {}

export default App