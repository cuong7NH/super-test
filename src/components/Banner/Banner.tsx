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
import Demo from '../Demo/Demo'

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
      <div className={'banner-bg'}/>
      <div className={'banner-bg-bottom'}>
        <svg preserveAspectRatio='none' width='2440' height='74' viewBox='0 0 1440 74'
             className='Hero__Swoops-sc-13y35jq-4 laHbQG'>
          <path
            d='M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z' />
        </svg>
      </div>
      <Container>
        <div className={'banner'}>
          <ul className={'banner-social'}>
            <motion.li
              initial='hidden'
              variants={variantsIcon}
              transition={{ ease: 'easeOut', duration: 0.4 }}
              ref={ref}
              animate={controls}
            ><UilLinkedinAlt color={themeProvider.color} /></motion.li>
            <motion.li
              initial='hidden'
              variants={variantsIcon}
              transition={{ ease: 'easeOut', duration: 0.4, delay: 0.3 }}
              ref={ref}
              animate={controls}
            ><UilDribbble color={themeProvider.color} /></motion.li>
            <motion.li
              initial='hidden'
              variants={variantsIcon}
              transition={{ ease: 'easeOut', duration: 0.4, delay: 0.6 }}
              ref={ref}
              animate={controls}
            ><UilGithubAlt color={themeProvider.color} /></motion.li>
          </ul>
          <div className={'banner-info'}>
            <motion.h3
              initial='hidden'
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.4 }}
              ref={ref}
              animate={controls}
            >Hi, I'm CuongNH
            </motion.h3>
            <motion.h4
              initial='hidden'
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.4, delay: 0.2 }}
              ref={ref}
              animate={controls}
            >Frontend Developer
            </motion.h4>
            <motion.p
              initial='hidden'
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.4, delay: 0.4 }}
              ref={ref}
              animate={controls}
            >I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of
              graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the
              job done.
            </motion.p>
            <motion.div
              initial='hidden'
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.4, delay: 0.6 }}
              ref={ref}
              animate={controls}
            >
              <ButtonDefault
                themeProvider={themeProvider}
                text={'Contact Me'} icon={<UilMessage />} iconPosition={'start'} />
            </motion.div>
          </div>
          <div
            className={'banner-img'}
          >
            {
              themeProvider.theme === THEME_OPTIONS.DARK ?
                <div className={'me'}>
                  <img src={process.env.PUBLIC_URL + '/assets/images/me-dark.webp'} alt={'banner'} />
                </div>
                :
                <div className={'me'}>
                  <img src={process.env.PUBLIC_URL + '/assets/images/me-light.webp'} alt={'banner'} />
                </div>
            }
            <div className={'demo'}>
              <Demo />
            </div>
          </div>
        </div>
      </Container>
    </BannerWrapper>
  )
}

export default Banner