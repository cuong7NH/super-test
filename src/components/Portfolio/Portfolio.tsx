import React, { useEffect } from 'react'
import { PortfolioWrapper } from './PortfolioStyled'
import Container from '../Container/Container'
import TitleSection from '../TitleSection/TitleSection'
import ButtonDefault from '../Button/ButtonDefault'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
// @ts-ignore
import { UilTruck, UilDocker, UilMessage } from '@iconscout/react-unicons'
// @ts-ignore
import Slider from 'react-slick'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Portfolio = () => {

  const themeProvider = useAppSelector(selectThemeProvider)

  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }
  return (
    <PortfolioWrapper id={'Portfolio'} themeProvider={themeProvider}>
      <Container>
        <TitleSection title={'Portfolio'} desc={'My technical level'} />
        <motion.div
          className={'slider-wrapper'}
          initial='hidden'
          variants={variants}
          transition={{ ease: 'easeOut', duration: 0.4 }}
          ref={ref}
          animate={controls}
        >
          <Slider {...settings}>
            <div>
              <div className={'portfolio'}>
                <div
                  className={'portfolio-img'}>
                  <img src={process.env.PUBLIC_URL + '/assets/images/login-bg.svg'} alt={'portfolio'} />
                </div>
                <div
                  className={'portfolio-content'}
                >
                  <h3>Recent works</h3>
                  <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor
                    sit amet
                    quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quo ei simul congue
                    exerci
                    ad nec admodum perfecto. Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum
                    perfecto. </p>
                  <ButtonDefault
                    themeProvider={themeProvider}
                    text={'Get Started'} icon={<UilTruck />}
                    iconPosition={'start'} />
                </div>
              </div>
            </div>
            <div>
              <div className={'portfolio'}>
                <div
                  className={'portfolio-img'}>
                  <img src={process.env.PUBLIC_URL + '/assets/images/4.svg'} alt={'portfolio'} />
                </div>
                <div
                  className={'portfolio-content'}
                >
                  <h3>Work Process</h3>
                  <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor
                    sit amet
                    Call to action pricing table is really crucial to your for your business website. Make your bids
                    stand-out with amazing options.Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum
                    perfecto. </p>
                  <ButtonDefault
                    themeProvider={themeProvider}
                    text={'Join Now'} icon={<UilDocker />}
                    iconPosition={'start'} />
                </div>
              </div>
            </div>
            <div>
              <div className={'portfolio'}>
                <div
                  className={'portfolio-img'}>
                  <img src={process.env.PUBLIC_URL + '/assets/images/5.svg'} alt={'portfolio'} />
                </div>
                <div
                  className={'portfolio-content'}
                >
                  <h3>Build your dream</h3>
                  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    I have a set of baseline CSS styles that come with me from project to project. In the past, I'd use
                    a typical CSS reset, but times have changed, and I believe I have a better set of global styles!
                  </p>
                  <ButtonDefault
                    themeProvider={themeProvider}
                    text={'Read more'} icon={<UilMessage />}
                    iconPosition={'start'} />
                </div>
              </div>
            </div>
          </Slider>
        </motion.div>
      </Container>
    </PortfolioWrapper>
  )
}

export default Portfolio