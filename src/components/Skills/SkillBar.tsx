import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'

type SkillBarProps = {
  themeProvider: {
    color: string
  },
  percent: number
}
const SkillBarWrapper = styled.div<SkillBarProps>`
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

type Props = {
  percent: number,
  themeProvider: {
    theme: string
  }
}

const SkillBar = ({percent} : Props) => {
  const themeProvider = useAppSelector(selectThemeProvider)

  const [count, ] = useState(0)
  useEffect(() => {
    console.log('count', count)
    // while (count < percent) {
    //   setTimeout(() => {
    //     setCount(count + 1)
    //   }, 100)
    // }
  }, [count])
  return (
    <SkillBarWrapper themeProvider={themeProvider}  percent={percent}/>
  )
}

export default SkillBar