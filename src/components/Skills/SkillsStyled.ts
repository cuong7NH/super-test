import styled from 'styled-components'
import { motion } from 'framer-motion';
import { THEME_OPTIONS } from '../../constant'
import { darkTheme, lightTheme } from '../../theme'

export const SkillsWrapper = styled.div`

  padding-top: 80px;
  @media screen and (min-width: 481px){
    padding-top: 100px;
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 60px;
    row-gap: 30px;
`
type Props = {
  themeProvider: {
    theme: string,
    color: string
  }
}
export const SkillsItemWrapper = styled(motion.div)<Props>`
  padding: 30px;
  background-color: ${props => props.themeProvider.theme === THEME_OPTIONS.LIGHT ? lightTheme.backgroundBox : darkTheme.backgroundBox};
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
  border-radius: 20px;

  @media screen and (min-width: 769px){
    flex: 0 0 calc(50% - 30px);
    max-width: calc(50% - 30px);
  }
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 100%;
  max-width: 100%;

  .skills-icon {
    flex: 0 0 40px;
    max-width: 40px;
    padding-top: 10px;
  }

  .skills-context {
    flex-grow: 1;

    .skills-context-title {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      div {
        h5 {
          font-size: 20px;
          margin-bottom: 4px;
          font-weight: 500;
        }

        p {
          margin-bottom: 0;
          font-style: italic;
        }

      }
    }
  }
`

type SkillListProps = {
  isOpen: boolean
}

export const SkillList = styled.div<SkillListProps>`
  transition: 4s;
  margin-bottom: 12px;
  max-height: ${props => props.isOpen ? 'auto' : '0px'};
  overflow: hidden;

  .skill-name {
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
`

type SkillBarProps = {
  themeProvider: {
    color: string
  },
  percent: number
}

export const SkillBar = styled.div<SkillBarProps>`
  height: 10px;
  background-color: #d3d2d9;
  border-radius: 5px;
  position: relative;
  margin-bottom: 12px;

  &:before {
    content: '';
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
    bottom: 0;
    right: ${props => `${100 - props.percent}%`};
    background-color: ${props => props.themeProvider.color};
  }
`
