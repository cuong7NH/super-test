import * as React from 'react'
// @ts-ignore
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import { THEME_OPTIONS } from '../../constant'
import DarkMode from '../DarkMode/DarkMode'
import ButtonSound from '../Button/ButtonSound'
import ButtonLogout from '../Button/ButtonLogout'


interface ToggleProps {
  toggleOpen: (...args: any[]) => any
}

export const Navigation = ({toggleOpen} : ToggleProps) => {
  const themeProvider = useAppSelector(selectThemeProvider)
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      color: themeProvider.theme === THEME_OPTIONS.DARK ? '#FFF' : '#5E5C7F',

    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
      color: themeProvider.color,
    },
  }


  return <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} toggleOpen={toggleOpen}/>
    ))}
    <div style={{display: 'flex', gap: 14}}>
      <motion.li
        style={{width: 24}}
        variants={{
          open: {
            y: 0,
            opacity: 1,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
            },
          },
          closed: {
            y: 50,
            opacity: 0,
            transition: {
              y: { stiffness: 1000 },
            },
          },
        }}
        whileHover={{scale: 1.2}}
        whileTap={{ scale: 0.95, opacity: 0.8 }}
      >
        <DarkMode/>

      </motion.li>
      <motion.li
        style={{width: 24}}
        variants={{
          open: {
            y: 0,
            opacity: 1,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
            },
          },
          closed: {
            y: 50,
            opacity: 0,
            transition: {
              y: { stiffness: 1000 },
            },
          },
        }}
        whileHover={{scale: 1.2}}
        whileTap={{ scale: 0.95, opacity: 0.8 }}
      >
        <ButtonSound />
      </motion.li>
      <motion.li
        style={{width: 24}}
        variants={{
          open: {
            y: 0,
            opacity: 1,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
            },
          },
          closed: {
            y: 50,
            opacity: 0,
            transition: {
              y: { stiffness: 1000 },
            },
          },
        }}
        whileHover={{scale: 1.2}}
        whileTap={{ scale: 0.95, opacity: 0.8 }}
      >
        <ButtonLogout/>
      </motion.li>
    </div>
  </motion.ul>
}


const itemIds = [0, 1, 2, 3, 4, 5]
