import React from 'react'
import {FooterWrapper} from './FooterStyled'
import Container from '../../components/Container/Container'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
const Footer = () => {

  const themeProvider = useAppSelector(selectThemeProvider)

  return (
    <FooterWrapper themeProvider={themeProvider}>
      <Container>
        <div className={'footer'}>
          <div className={'footer-content'}>
            <div className={'logo'}>Super C*</div>
          </div>
          <div className={'copyright'}>© 2021 Cuongnh Template.
          </div>
        </div>
      </Container>


    </FooterWrapper>
  )
}

export default Footer