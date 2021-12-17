import React, {useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
// @ts-ignore
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
type Props = {
  title: string,
  desc: string,
};

type StyledProps = {
  themeProvider: {
    theme: string,
  }
};
const TitleSectionWrapper = styled.div<StyledProps>`

  text-align: center;
  margin-bottom: 40px;

  h3 {
    font-size: 34px;
    font-weight: bold;
    margin-bottom: 0;

  }

  p {
    color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.descColor : darkTheme.descColor};

  }
  .bar {
    margin: 6px 0 12px;
    svg {
      path {
        stroke: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.highlightColor : darkTheme.highlightColor};
      }
    }
  }

`

const TitleSection = (props: Props) => {
  const themeProvider = useAppSelector(selectThemeProvider)
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible").then(r => r);
    }
  }, [controls, inView]);
  const {
    title,
    desc,
  } = props

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0,  y: -80 },
  }


  return (
  <motion.div
    initial="hidden"
    variants={variants}
    transition={{ ease: "easeOut", duration: 0.5 }}
    ref={ref}
    animate={controls}
  >
    <TitleSectionWrapper themeProvider={themeProvider}>
      <h3>{title}</h3>
      <div className={'bar'}>
        <svg width="125" height="12" viewBox="0 0 135 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 13.3507C23.614 12.0121 30.8232 10.3647 46.5 9.31385C73.1353 7.52845 100.096 8.08065 126.851 8.08065" stroke="#F6E05E" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p>{desc}</p>

    </TitleSectionWrapper>
  </motion.div>
  )
}
TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}
export default TitleSection



