import React, { useEffect } from 'react'
import Container from '../Container/Container'
import { AboutMeWrapper } from './AboutMeStyled'
import TitleSection from '../../components/TitleSection/TitleSection'
import ButtonDefault from '../Button/ButtonDefault'
// @ts-ignore
import { UilDownloadAlt } from '@iconscout/react-unicons'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutMe = () => {
  const themeProvider = useAppSelector(selectThemeProvider)
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  const variants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: 0, y: 150 },
  }
  return (
    <AboutMeWrapper id={'About'} themeProvider={themeProvider}>
      <Container>
        <TitleSection title={'About me'} desc={'My introduction'} />
        <div className={'about-me'}>
          <motion.div
            initial='hidden'
            variants={variants}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            ref={ref}
            animate={controls}
            className={'about-me-img'}
          >
            <img src={process.env.PUBLIC_URL + '/assets/images/login-bg.svg'} alt={'bg'} />
          </motion.div>
          <div className={'about-me-info'}>
            <motion.h3
              initial='hidden'
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.2 }}
              ref={ref}
              animate={controls}
            >My introduction
            </motion.h3>
            <motion.p
              initial='hidden'
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.4, delay: 0.4 }}
              ref={ref}
              animate={controls}
            >
              I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of
              graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the
              job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for
              real-time schemas.
            </motion.p>
            <ul>
              <motion.li
                initial='hidden'
                variants={variants}
                transition={{ ease: 'easeOut', duration: 0.4, delay: 0.6 }}
                ref={ref}
                animate={controls}
              >
                <span className={'counter'}>08+</span>
                <span>years<br />experience</span>
              </motion.li>
              <motion.li
                initial='hidden'
                variants={variants}
                transition={{ ease: 'easeOut', duration: 0.4, delay: 0.8 }}
                ref={ref}
                animate={controls}
              >
                <span className={'counter'}>20+</span>
                <span>completed<br />project</span>
              </motion.li>
              <motion.li
                initial='hidden'
                variants={variants}
                transition={{ ease: 'easeOut', duration: 0.4, delay: 1 }}
                ref={ref}
                animate={controls}
              >
                <span className={'counter'}>5+</span>
                <span>Companies<br />worked</span>
              </motion.li>
            </ul>
            <motion.div
              initial='hidden'
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.4, delay: 1.4 }}
              ref={ref}
              animate={controls}
            >
              <ButtonDefault themeProvider={themeProvider} text={'Download CV'} icon={<UilDownloadAlt />}
                             iconPosition={'end'} />
            </motion.div>
          </div>
        </div>
      </Container>
    </AboutMeWrapper>
  )
}

export default AboutMe