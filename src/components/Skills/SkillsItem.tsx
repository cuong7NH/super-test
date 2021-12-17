import React, { useEffect, useState } from 'react'
// @ts-ignore
import { UilAngleUp } from '@iconscout/react-unicons'
import { SkillsItemWrapper, SkillList } from './SkillsStyled'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'

import SkillBar from './SkillBar'
import {  useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {
  skill: {
    name: string,
    icon: React.ReactNode,
    yearsExperience: number,
    isOpen: boolean,
    skills: any,
  }
}

const SkillsItem = (props: Props) => {
  const themeProvider = useAppSelector(selectThemeProvider)

  const { skill } = props

  const [isOpenSkillList, setIsOpenSkillList] = useState(skill.isOpen)


  const variants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 1,  y: 50 },
  }
  const handleOpenSkill = () => {
    setIsOpenSkillList(true)
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (

    <SkillsItemWrapper
      themeProvider={themeProvider}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      ref={ref}
      custom={100}
      animate={controls}
      initial='hidden' variants={variants}
    >
      <div className={'skills-icon'}>
        {skill.icon}
      </div>
      <div className={'skills-context'}>
        <div className={'skills-context-title'} onClick={handleOpenSkill}>
          <div>
            <h5>{skill.name}</h5>
            <p>More than {skill.yearsExperience} years</p>
          </div>
          <UilAngleUp
            color={themeProvider.color}
            style={{ transform: isOpenSkillList ? 'rotate(0deg)' : 'rotate(180deg)' }} />
        </div>
        <SkillList isOpen={isOpenSkillList}>
          {
            skill.skills.map((skill: { name: string, percent: number }) => (
              <div key={skill.name} className={'skill-item'}>
                <div className={'skill-name'}>
                  <span>{skill.name}</span>
                  <span>{skill.percent}</span>
                </div>
                <SkillBar themeProvider={themeProvider} percent={skill.percent} />
              </div>
            ))
          }
        </SkillList>
      </div>
    </SkillsItemWrapper>
  )
}

export default SkillsItem