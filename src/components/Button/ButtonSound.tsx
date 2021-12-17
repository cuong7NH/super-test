import React from 'react'
// @ts-ignore
import { UilVolume, UilVolumeOff } from '@iconscout/react-unicons'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectSoundProvider, setSound } from '../../store/soundStore'
// @ts-ignore
import menuSfx from '../../sounds/menu.mp3'
import useSound from 'use-sound'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'

const ButtonSound = () => {
  const soundProvider = useAppSelector(selectSoundProvider)
  const themeProvider = useAppSelector(selectThemeProvider)
  const [play] = useSound(menuSfx);

  const dispatch = useAppDispatch()
  const handleSetSound = () => {
    if(soundProvider.isMute) {
      play()
    }
    dispatch(setSound())
  }

  return (
    <ButtonSoundWrapper onClick={handleSetSound} themeProvider={themeProvider}>
      {
        soundProvider.isMute ? <UilVolumeOff /> : <UilVolume />
      }
    </ButtonSoundWrapper>
  )
}

export default ButtonSound

type StyledProps = {
  themeProvider: {
    theme: string
  }
}

const ButtonSoundWrapper = styled.div<StyledProps>`
        position: relative;

  display: flex;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
    color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};

  }

`