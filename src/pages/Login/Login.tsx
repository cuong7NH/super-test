import React from 'react'

import { LoginWrapper } from './LoginStyled'
import LoginTab from './LoginTab'
import Container from '../../components/Container/Container'

// import {motion} from 'framer-motion'
const Login = () => {


  // const tabContentVariant = {
  //   active: {
  //     display: "block",
  //     transition: {
  //       staggerChildren: 0.2
  //     }
  //   },
  //   inactive: {
  //     display: "none"
  //   }
  // };


  return (
    <LoginWrapper>
      <Container>
        <div className={'login'}>
          <div className={'login-content'}>
            <img src={process.env.PUBLIC_URL + '/assets/images/login-bg.svg'} alt={'bg'} />
          </div>
          <div className={'login-form'}>
            <LoginTab />
          </div>
        </div>
      </Container>
    </LoginWrapper>
  )
}

export default Login