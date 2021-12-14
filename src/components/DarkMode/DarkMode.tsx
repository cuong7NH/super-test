import React, { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { THEME_OPTIONS } from '../../constant'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectThemeProvider, setTheme } from '../../providers/ThemeProvider/themeProviderSlice'
import useSound from 'use-sound'
// @ts-ignore
import meowSfx from '../../sounds/meow.mp3'

const DarkMode = () => {

  const themeProvider = useAppSelector(selectThemeProvider)
  const dispatch = useAppDispatch()
  const [play] = useSound(meowSfx);

  const [isDarkMode, setDarkMode] = useState(themeProvider.theme === THEME_OPTIONS.DARK)
  const toggleDarkMode = () => {
    play()
    dispatch(setTheme(isDarkMode ? THEME_OPTIONS.LIGHT : THEME_OPTIONS.DARK))
  }

  useEffect(() => {
    setDarkMode(themeProvider.theme === THEME_OPTIONS.DARK)
  }, [themeProvider])

  return (
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={24}
        sunColor={'#5E5C7F'}
      />
  )
}

DarkMode.propTypes = {

}

export default DarkMode