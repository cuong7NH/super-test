import React from 'react'
import PropTypes from 'prop-types'
import {GlobalStyle} from './ThemeProviderStyled'

type Props  = {
  children: React.ReactNode,
  theme: object,
}

const ThemeProvider = ({children, theme}: Props) => {
  return (
    <>
      <GlobalStyle
        theme={theme}
      />
      {children}
    </>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider