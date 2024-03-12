/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as S from '@styles/components/LoginForm'
import InputField from './InputField'

type FormFields = {
  email: string
  password: string
}

type Props = {
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SignIn({ setShowSignUp }: Props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
      console.log(data)
    } catch (err) {
      setError('email', {
        message: 'This email is already Taken',
      })
    }
  }

  return (
    <S.LoginWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputField inputType="email" register={register} error={errors.email} />

      <InputField inputType="password" register={register} error={errors.password} />

      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Loading' : 'Submit'}
      </button>
      <button type="button" onClick={() => setShowSignUp(true)}>
        SignUp
      </button>
    </S.LoginWrapper>
  )
}
