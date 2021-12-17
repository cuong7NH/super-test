import React from 'react'
import Container from '../Container/Container'
import TitleSection from '../TitleSection/TitleSection'
import { SkillsWrapper  } from './SkillsStyled'
// @ts-ignore
import { UilBracketsCurly, UilDesktopAlt, UilTelegramAlt  } from '@iconscout/react-unicons'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import SkillsItem from './SkillsItem'

const Skills = () => {
  const themeProvider = useAppSelector(selectThemeProvider)

  const technicalList = [
    {
      name: 'Frontend developer',
      icon: <UilBracketsCurly color={themeProvider.color} />,
      yearsExperience: 4,
      isOpen: true,
      skills: [
        {
          name: 'HTML',
          percent: 90,
        },
        {
          name: 'CSS',
          percent: 80,
        },
        {
          name: 'JavaScript',
          percent: 60,
        },
        {
          name: 'React',
          percent: 85,
        },
      ],
    },
    {
      name: 'Designer',
      yearsExperience: 4,
      isOpen: true,
      icon: <UilTelegramAlt color={themeProvider.color} />,
      skills: [
        {
          name: 'Photoshop',
          percent: 90,
        },
        {
          name: 'UI/UX',
          percent: 80,
        },
        {
          name: 'Creativity',
          percent: 60,
        },
        {
          name: 'Communication',
          percent: 85,
        },
      ],
    },
    {
      name: 'Backend developer',
      yearsExperience: 2,
      icon: <UilDesktopAlt color={themeProvider.color} />,
      isOpen: true,
      skills: [
        {
          name: 'Java',
          percent: 90,
        },
        {
          name: 'My SQL',
          percent: 80,
        },
        {
          name: 'Databases',
          percent: 60,
        },
      ],
    },
    {
      name: 'DevOps',
      yearsExperience: 2,
      icon: <UilDesktopAlt color={themeProvider.color} />,
      isOpen: true,
      skills: [
        {
          name: 'Security',
          percent: 50,
        },
        {
          name: 'Cloud',
          percent: 80,
        },
        {
          name: 'Proactiveness',
          percent: 60,
        },
      ],
    },
  ]

  return (
    <SkillsWrapper id={'Skills'}>
      <Container>
        <TitleSection title={'Skills'} desc={'My technical level'} />
        <div className={'skills'}>
          {
            technicalList.map((item, i) => (
              <SkillsItem skill={item} key={i}/>
            ))
          }
        </div>
      </Container>
    </SkillsWrapper>

  )
}

export default Skills