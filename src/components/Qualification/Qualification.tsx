import React, { useEffect } from 'react'


import { QualificationWrapper } from './QualificationStyled'
import TitleSection from '../TitleSection/TitleSection'
import Container from '../Container/Container'
// @ts-ignore
import { UilGraduationCap, UilBriefcaseAlt } from '@iconscout/react-unicons'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Qualification = () => {
  const themeProvider = useAppSelector(selectThemeProvider)

  const timeLine = [
    {
      time: '2019 - Present',
      title: 'Academic Degree',
      content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',

    },
    {
      time: '2013 - 2017',
      title: 'Bachelor’s Degree',
      content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',

    },
    {
      time: '2009 - 2013',
      title: 'Honours Degree',
      content: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',

    },
  ]

  const variants = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: (i: number) => ({ opacity: 0, scale: 0.1, x: i }),
    hover: {y: -10}
  }

  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <QualificationWrapper themeProvider={themeProvider}>
      <Container>
        <TitleSection title={'Experience'} desc={'My technical level'} />

        <div className={'qualification'}>

          <motion.div
            ref={ref}
            custom={-100}
            animate={controls}
            className={'time-line-box'}
            initial='hidden'
            whileHover={'hover'}
            transition={{  ease: 'easeOut', duration: 0.5 }}
            variants={variants}
          >
            {
              timeLine.map((item, i) => (
                <div className={'time-line-item'} key={i}>
                  <UilGraduationCap className={'icon'} color={themeProvider.color} />
                  <p className={'time'}>{item.time}</p>
                  <h5 className={'title'}>{item.title}</h5>
                  <p className={'content'}>
                    {item.content}
                  </p>
                </div>
              ))
            }
          </motion.div>

          <motion.div
            transition={{ ease: 'easeOut', duration: 0.5}}
            ref={ref}
            custom={100}
            animate={controls}
            whileHover={'hover'}
            className={'time-line-box'} initial='hidden' variants={variants}>
            {
              timeLine.map((item, i) => (
                <div className={'time-line-item'} key={i}>
                  <UilBriefcaseAlt className={'icon'} color={themeProvider.color} />
                  <p className={'time'}>{item.time}</p>
                  <h5 className={'title'}>{item.title}</h5>
                  <p className={'content'}>
                    {item.content}
                  </p>
                </div>
              ))
            }
          </motion.div>
        </div>
      </Container>
    </QualificationWrapper>
  )
}

Qualification.propTypes =
  {}

export default Qualification