import React, { useEffect, useState } from 'react'
import { SignInFormWrapper } from './LoginStyled'
import { Form, Input } from 'antd'
import ButtonDefault from '../../components/Button/ButtonDefault'
import { useAppSelector } from '../../app/hooks'
import { selectThemeProvider } from '../../providers/ThemeProvider/themeProviderSlice'
import { selectAccountProvider } from '../../providers/AccountProvider/accountProviderSlice'
import { setMyAccount } from '../../providers/AccountProvider/myAccountProviderSlice'
import { useHistory } from 'react-router-dom'
// @ts-ignore
import { UilSignInAlt } from '@iconscout/react-unicons'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast';

const SignInForm = () => {
  const themeProvider = useAppSelector(selectThemeProvider)
  const accountProvider = useAppSelector(selectAccountProvider)
  const history = useHistory()

  const [isLoading, setIsLoading] = useState(false)
  const notifyError = (message: string) => toast.error(message);


  useEffect(() => {
    localStorage.removeItem('jwt')
  }, [])

  const onFinish = (values: any) => {
    const myAccount = accountProvider.find(account => account.username === values.username)
    if (!myAccount) {
      notifyError('Account does not exist!')
    } else {
      // @ts-ignore
      if (myAccount.password !== values.password) {
        notifyError('wrong password.')
      } else {
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
          console.log('myAccount', myAccount)
          setMyAccount(myAccount)
          localStorage.setItem('jwt', values.username)
          history.push('/')
        }, 500)

      }

    }
  }

  const variants = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }
  const variantsInput = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }


  return (
    <SignInFormWrapper>
      <Form
        layout={'vertical'}
        onFinish={onFinish}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <motion.div
            variants={variantsInput}
            initial='hidden'
            animate='show'
          >
            <Input placeholder={'Enter username...'}/>
          </motion.div>
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <motion.div
            variants={variantsInput}
            initial='hidden'
            animate='show'
          >
            <Input.Password placeholder={'Enter password...'}/>
          </motion.div>
        </Form.Item>
        <motion.div
          variants={variants}
          initial='hidden'
          animate='show'
        >
          <ButtonDefault
            loading={isLoading}
            themeProvider={themeProvider}
            text={'Sign In'}
            icon={<UilSignInAlt style={{ transform: 'rotate(180deg)' }} />}
            iconPosition={'start'} />
        </motion.div>
      </Form>
      <Toaster />
    </SignInFormWrapper>
  )
}

export default SignInForm




