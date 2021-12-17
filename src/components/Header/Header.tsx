import React, { useState } from 'react'
import Container from '../Container/Container'
import DarkMode from '../DarkMode/DarkMode'
import { HeaderWrapper, MenuItem } from './HeaderStyled'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import ButtonSound from '../Button/ButtonSound'
import ButtonLogout from '../Button/ButtonLogout'

const Header = () => {
  const themeProvider = useAppSelector(selectThemeProvider)
  const menuList = [
    'Home',
    'About',
    'Skills',
    'Services',
    'Portfolio',
    'Contact',
  ]
  const [menuActive, setMenuActive] = useState('Home')

  return (
    <HeaderWrapper themeProvider={themeProvider}>
      <Container>
        <div className={'header'}>
          <a href={'#Home'} className={'logo'}>Super C*</a>
          <ul className={'menu'}>
            {
              menuList.map((menu, index) =>
                <MenuItem
                  themeProvider={themeProvider}
                  isActive={menuActive === menu}
                  onClick={() => {
                    if(menu === 'Logout') {
                      localStorage.removeItem('jwt')
                      return
                    }
                    setMenuActive(menu)
                  }}
                  key={index}
                >
                  <a href={`#${menu}`} style={{color: 'inherit', display: 'block'}}>{menu}</a>
                </MenuItem>,
              )
            }

            <li className={'dark-mode'}>
              <DarkMode/>
              <ButtonSound />
              <ButtonLogout/>
            </li>
          </ul>
        </div>
      </Container>
    </HeaderWrapper>
  )
}

export default Header