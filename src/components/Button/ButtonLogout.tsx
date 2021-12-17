import React from 'react'
// @ts-ignore
import { UilSignOutAlt  } from '@iconscout/react-unicons'
import styled from 'styled-components'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'
import { useHistory } from 'react-router-dom'
const ButtonLogout = () => {

  const themeProvider = useAppSelector(selectThemeProvider)
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    history.push('/login')
  }

  return (
    <ButtonLogoutWrapper themeProvider={themeProvider} onClick={handleLogout}>
      <UilSignOutAlt />
    </ButtonLogoutWrapper>
  )
}

export default ButtonLogout

type StyledProps = {
  themeProvider: {
    theme: string
  }
}

const ButtonLogoutWrapper = styled.div<StyledProps>`
  display: flex;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
    color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};

  }


`