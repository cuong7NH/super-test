import React, { useEffect } from 'react'
import { BannerWrapper } from './BannerStyled'
import Container from '../Container/Container'
// @ts-ignore
import { UilLinkedinAlt, UilDribbble, UilGithubAlt, UilMessage } from '@iconscout/react-unicons'
import ButtonDefault from '../Button/ButtonDefault'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'

const Banner = () => {
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
  const variantsIcon = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: -100, y: 0 },
  }
  return (
    <BannerWrapper id={'Home'} themeProvider={themeProvider}>
      <Container>
        <div className={'banner'}>
          <ul className={'banner-social'}>
            <motion.li
              initial="hidden"
              variants={variantsIcon}
              transition={{ ease: "easeOut", duration: 0.4 }}
              ref={ref}
              animate={controls}
            ><UilLinkedinAlt color={themeProvider.color}/></motion.li>
            <motion.li
              initial="hidden"
              variants={variantsIcon}
              transition={{ ease: "easeOut", duration: 0.4, delay: 0.3 }}
              ref={ref}
              animate={controls}
            ><UilDribbble color={themeProvider.color}/></motion.li>
            <motion.li
              initial="hidden"
              variants={variantsIcon}
              transition={{ ease: "easeOut", duration: 0.4, delay: 0.6 }}
              ref={ref}
              animate={controls}
            ><UilGithubAlt color={themeProvider.color}/></motion.li>
          </ul>
          <div className={'banner-info'}>
            <motion.h3
              initial="hidden"
              variants={variants}
              transition={{ ease: "easeOut", duration: 0.4 }}
              ref={ref}
              animate={controls}
            >Hi, I'm CuongNH</motion.h3>
            <motion.h4
              initial="hidden"
              variants={variants}
              transition={{ ease: "easeOut", duration: 0.4, delay: 0.2 }}
              ref={ref}
              animate={controls}
            >Frontend Developer</motion.h4>
            <motion.p
              initial="hidden"
              variants={variants}
              transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
              ref={ref}
              animate={controls}
            >I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of
              graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the
              job done. </motion.p>
            <motion.div
              initial="hidden"
              variants={variants}
              transition={{ ease: "easeOut", duration: 0.4, delay: 0.6 }}
              ref={ref}
              animate={controls}
            >
              <ButtonDefault
                themeProvider={themeProvider}
                text={'Contact Me'} icon={<UilMessage />} iconPosition={'start'} />
            </motion.div>
          </div>
          <motion.div
            className={'banner-img'}
            initial="hidden"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.4 }}
            ref={ref}
            animate={controls}
          >
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path fill={themeProvider.theme === THEME_OPTIONS.DARK ? darkTheme.highlightColor : lightTheme.highlightColor}
                    d='M59.5,-33.9C73.6,-9.8,79.3,19.6,67.9,38.5C56.6,57.4,28.3,65.8,1.4,65C-25.6,64.2,-51.2,54.3,-62.3,35.5C-73.4,16.7,-70.1,-11,-57.3,-34.2C-44.5,-57.5,-22.3,-76.4,0.2,-76.5C22.6,-76.6,45.3,-57.9,59.5,-33.9Z'
                    transform='translate(100 100)' />
            </svg>
          </motion.div>
        </div>
      </Container>
    </BannerWrapper>
  )
}

export default Banner