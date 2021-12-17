import * as React from 'react'
import { useRef } from 'react'
// @ts-ignore
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import styled from 'styled-components'
import useSound from 'use-sound'
// @ts-ignore
import menuSfx from '../../sounds/menu.mp3'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'


const MenuMobile = () => {
  const themeProvider = useAppSelector(selectThemeProvider)

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      backgroundColor: themeProvider.theme === THEME_OPTIONS.DARK ? darkTheme.body : lightTheme.body,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(20px at 270px 35px)',
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const [play] = useSound(menuSfx)

  return (
    <MenuMobileWrapper themeProvider={themeProvider}>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div className='background' variants={sidebar} />
        <Navigation toggleOpen={toggleOpen}/>
        <div>
          <MenuToggle toggle={() => {
            play()
            toggleOpen()
          }} />
        </div>

      </motion.nav>
    </MenuMobileWrapper>
  )
}

type menuMobileType = {
  themeProvider: {
    theme: string,
  }
}

const MenuMobileWrapper = styled.div<menuMobileType>`
  @media only screen and (min-width: 801px) {
    display: none;
  }
  display: block;

  nav {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
  }
 
  .background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
  }

  button {
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    transform: translateY(3px);
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: absolute;
    top: 0;
    width: 230px;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    a {
      color: inherit;
      display: flex;
      gap: 10px;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: ${(themeProvider) => themeProvider.theme === THEME_OPTIONS.DARK ? darkTheme.highlightColor : lightTheme.highlightColor};
      }
    }
  }

  .icon-placeholder {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 40px 0;
    margin-right: 20px;
  }

  .text-placeholder {
    border-radius: 5px;
    width: 200px;
    height: 20px;
    flex: 1;
  }

`
export default MenuMobile
