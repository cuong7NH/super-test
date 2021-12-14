import React, { useEffect } from 'react'
import { ServicesWrapper } from './ServicesStyled'
import Container from '../Container/Container'
import TitleSection from '../TitleSection/TitleSection'
// @ts-ignore
import { UilReact, UilVuejsAlt, UilHtml5Alt, UilJavaScript } from '@iconscout/react-unicons'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
// UilJavaScript
const Services = () => {
  const themeProvider = useAppSelector(selectThemeProvider)

  const serviceList = [
    {
      icon: <UilReact />,
      title: 'Digital Design',
      desc: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.',

    },
    {
      icon: <UilVuejsAlt />,
      title: 'Strategy Solutions',
      desc: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.',

    },
    {
      icon: <UilHtml5Alt />,
      title: 'Truly Multipurpose',
      desc: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.',

    },
    {
      icon: <UilJavaScript />,
      title: 'Awesome Support',
      desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',

    },
  ]
  const variants = {
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    hover: {scale: 1.03, transition: {duration: 0.2}},
    hidden: (i: number) => {
      let x = 0 , y = 0
      if(i === 0) {
        x = -200;
        y = -200
      }
      if(i === 1) {
        x = 200;
        y = -200
      }
      if(i === 2) {
        x = -200;
        y = 200
      }
      if(i === 3) {
        x = 200;
        y = 200
      }
      return  { opacity: 0, x: x, y: y }
    },
  }

  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <ServicesWrapper themeProvider={themeProvider} id={'Services'}>
      <Container>
        <TitleSection title={'Services'} desc={'My technical level'} />
        <div className={'services'}>
          {
            serviceList.map((item, i) => (
              <motion.div
                className={'service-item'} key={i}
                transition={{ duration: 0.5 }}
                ref={ref}
                custom={i}
                animate={controls}
                whileHover={'hover'}
                initial='hidden'
                variants={variants}
              >
                <div className={'icon'}>
                  {item.icon}
                </div>
                <div className={'title'}>
                  {item.title}
                </div>
                <div className={'desc'}>
                  {item.desc}
                </div>
              </motion.div>
            ))
          }
        </div>
      </Container>

    </ServicesWrapper>
  )
}

Services.propTypes =
  {}

export default Services