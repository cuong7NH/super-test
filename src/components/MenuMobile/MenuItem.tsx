import * as React from 'react'
// @ts-ignore
import { motion } from 'framer-motion'
// @ts-ignore
import { UilEstate, UilUser, UilServerAlt, UilBag, UilGraduationCap } from '@iconscout/react-unicons'

const variants = {
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
}

const colors = ['Home', 'About', 'Skills', 'Services', 'Portfolio', '']


const renderIcon = (i: number) => {
  if (i === 0) return <UilEstate />
  if (i === 1) return <UilUser />
  if (i === 2) return <UilServerAlt />
  if (i === 3) return <UilBag />
  if (i === 4) return <UilGraduationCap />
}

const getHref = (i: number) => {
  if (i === 0) return '#Home'
  if (i === 1) return '#About'
  if (i === 2) return '#Skills'
  if (i === 3) return '#Services'
  if (i === 4) return '#Portfolio'
}



type Props = {
  i: number
  toggleOpen: (...args: any[]) => any
}


export const MenuItem = ({ i, toggleOpen }: Props) => {

  const handleClickMenuItem = () => {
    toggleOpen()
  }
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClickMenuItem}
    >
      <a href={getHref(i)}>
        <div>
          {renderIcon(i)}
        </div>
        <div>
          {colors[i]}
        </div>
      </a>
    </motion.li>
  )
}
