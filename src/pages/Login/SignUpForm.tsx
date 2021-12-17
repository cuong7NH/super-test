import React, { useState } from 'react'
import { SignUpFormWrapper } from './LoginStyled'
import ButtonDefault from '../../components/Button/ButtonDefault'
import {Form, Input} from 'antd'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectThemeProvider, } from '../../providers/ThemeProvider/themeProviderSlice'
import { selectAccountProvider, addAccount } from '../../providers/AccountProvider/accountProviderSlice'
// @ts-ignore
import { UilPlusCircle } from '@iconscout/react-unicons'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
const SignUpForm = ({onTabClick} : any) => {

  const themeProvider = useAppSelector(selectThemeProvider)
  const accountProvider = useAppSelector(selectAccountProvider)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useAppDispatch()
  const notifyError = (message: string) => toast.error(message);
  const notifySuccess = (message: string) => toast.success(message);

  const onFinish = (values: any) => {
    if(accountProvider.find(account => account.username === values.username)) {
      notifyError('User name already exists!')
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      dispatch(addAccount(values))
      onTabClick(0)
      notifySuccess('Account successfully created!')
    }, 500)
  }

  const variants = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.5}
    }
  }
  const variantsInput = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5}
    }
  }
  return (
    <SignUpFormWrapper>
      <Form
        layout={'vertical'}
        onFinish={onFinish}
      >
        <Form.Item
          label='Full name'
          name='fullName'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <motion.div
            variants={variantsInput}
            initial={'hidden'}
            animate={'show'}>
            <Input placeholder={'Enter your full name...'}/>
          </motion.div>
        </Form.Item>
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <motion.div
            variants={variantsInput}
            initial={'hidden'}
            animate={'show'}>
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
            initial={'hidden'}
            animate={'show'}>
            <Input.Password placeholder={'Enter password...'}/>
          </motion.div>
        </Form.Item>
        <motion.div
          variants={variants}
          initial={'hidden'}
          animate={'show'}
        >
          <ButtonDefault
            loading={isLoading}
            themeProvider={themeProvider}
            text={'Sign Up'}
            icon={<UilPlusCircle />}
            iconPosition={'start'} />
        </motion.div>
      </Form>
      <Toaster />
    </SignUpFormWrapper>
  )
}

export default SignUpForm