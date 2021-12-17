import React, { useState } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
// import "./styles.css";
// @ts-ignore
import { UilSignInAlt, UilUserPlus } from '@iconscout/react-unicons'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const tabVariant = {
  active: {
    width: '75%',
    transition: {
      type: 'tween',
      duration: 0.4,
    },
  },
  inactive: {
    width: '25%',
    transition: {
      type: 'tween',
      duration: 0.4,
    },
  },
}

const tabTextVariant = {
  active: {
    opacity: 1,
    x: 0,
    display: 'block',
    transition: {
      type: 'tween',
      duration: 0.3,
      delay: 0.3,
    },
  },
  inactive: {
    opacity: 0,
    x: -30,
    transition: {
      type: 'tween',
      duration: 0.3,
      delay: 0.1,
    },
    transitionEnd: { display: 'none' },
  },
}


const tabs = [
  {
    title: 'Sign In',
    id: 'signin',
    icon: <UilSignInAlt />,
    color: '#5d5dff',
    content: <span>tab content</span>,
  },
  {
    title: 'Sign Up',
    id: 'signup',
    icon: <UilUserPlus />,
    color: '#67bb67',
    content: <span>tab content</span>,
  },
]

// @ts-ignore
const TabComponent = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const onTabClick = (index: number) => {
    setActiveTabIndex(index)
  }
  const variants = {
    hidden: (i: number) => ({ opacity: 0, x: i }),
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className='container'>
      <div className='tabs-component'>
        {
          activeTabIndex === 0 &&
          <motion.h3
            custom={-100}
            className={'title'}
            variants={variants}
            initial='hidden'
            animate='show'
          >Welcome to Super C*
          </motion.h3>
        }
        {
          activeTabIndex === 1 &&
          <motion.h3
            custom={100}
            className={'title'}
            variants={variants}
            initial='hidden'
            animate='show'
          >Create your account
          </motion.h3>
        }
        <ul className='tab-links'>
          {tabs.map((tab: any, index: number) => (
            <motion.li
              key={tab.id}
              className={cn('tab', { active: activeTabIndex === index })}
              role='presentation'
              variants={tabVariant}
              animate={activeTabIndex === index ? 'active' : 'inactive'}
            >
              <a href={`#${tab.id}`} onClick={() => onTabClick(index)}>
                {tab.icon}
                <motion.span variants={tabTextVariant} style={{ whiteSpace: 'nowrap' }}>{tab.title}</motion.span>
              </a>
            </motion.li>
          ))}
        </ul>
        {
          activeTabIndex === 0 && <SignInForm />
        }
        {
          activeTabIndex === 1 && <SignUpForm onTabClick={onTabClick}/>
        }
      </div>
    </div>
  )
}

export default TabComponent
