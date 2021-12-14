import React, { useEffect } from 'react'
import { ContactWrapper } from './ContactStyled'
import Container from '../../components/Container/Container'
import TitleSection from '../TitleSection/TitleSection'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import ButtonDefault from '../Button/ButtonDefault'
// @ts-ignore
import { UilMessage, UilEnvelopeAlt, UilLocationPoint, UilPhone } from '@iconscout/react-unicons'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const themeProvider = useAppSelector(selectThemeProvider)

  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  const variants = {
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    hover: { scale: 1.01, transition:{ duration: 0.3, delay: 0 } },
    hidden: (i: number) => ({ opacity: 0, x: i, y: 0 }),
  }
  return (
    <ContactWrapper themeProvider={themeProvider} id={'Contact'}>
      <Container>
        <TitleSection title={'Contact Me'} desc={'Let\'s talk about everything!'} />
        <div className={'contact'}>
          <div className={'contact-info'}>
            <motion.div
              className={'info-box'}
              transition={{ duration: 0.3 }}
              custom={-300}
              ref={ref}
              animate={controls}
              whileHover={'hover'}
              initial='hidden'
              variants={variants}
            >
              <div className={'icon'}>
                <UilEnvelopeAlt />
              </div>
              <div>
                <div className={'title'}>Email</div>
                <span className={'email info'}>cuongnh1227@gmail.com</span>
              </div>
            </motion.div>
            <motion.div
              className={'info-box'}
              transition={{ duration: 0.5, delay: 0.3 }}
              custom={-300}
              ref={ref}
              animate={controls}
              whileHover={'hover'}
              initial='hidden'
              variants={variants}>
              <div className={'icon'}>
                <UilPhone />
              </div>
              <div>
                <div className={'title'}>Phone</div>
                <p className={'info'}>(+84) 869283807</p>
              </div>
            </motion.div>
            <motion.div
              className={'info-box'}
              transition={{ duration: 0.5, delay: 0.6 }}
              custom={-300}
              ref={ref}
              animate={controls}
              whileHover={'hover'}
              initial='hidden'
              variants={variants}>
              <div className={'icon'}>
                <UilLocationPoint />
              </div>
              <div>
                <div className={'title'}>Address</div>
                <p className={'info'}>New Skyline - KĐT Văn Quán, Đường 19/5, P. Văn Quán, Q. Hà Đông, Tp. Hà Nội.</p>
              </div>
            </motion.div>

          </div>
          <motion.div
            transition={{ duration: 0.5, delay: 0.3 }}
            custom={300}
            ref={ref}
            animate={controls}
            whileHover={'hover'}
            initial='hidden'
            variants={variants}
            className={'contact-form'}
          >
            <input className={'input-box input-box-50'} type='text' placeholder={'Your name'} />
            <input className={'input-box input-box-50'} type='text' placeholder={'Your Email'} />
            <input className={'input-box input-box-100'} type='text' placeholder={'Subject'} />
            <textarea className={'input-box input-box-100'} placeholder={'Message'} />
            <ButtonDefault
              themeProvider={themeProvider}
              text={'Send Message'} icon={<UilMessage />} iconPosition={'end'} />
          </motion.div>

        </div>


      </Container>

    </ContactWrapper>
  )
}

Contact.propTypes =
  {}

export default Contact