/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import * as S from '@styles/components/LoginForm'
import { useForm } from 'react-hook-form'

import { useSignUp } from '@hooks/LoginForm/useSignUp'
import InputField from './InputField'

type FormFields = {
  email: string
  password: string
}

type Props = {
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SignUpForm({ setShowSignUp }: Props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>()

  const { isSignUp, onSubmit } = useSignUp(setError)
  return isSignUp ? (
    <S.LoginSuccessWrapper>
      <p>로그인이 완료 되었습니다.</p>
      <button
        type="button"
        onClick={() => {
          setShowSignUp(false)
        }}
      >
        로그인 하기
      </button>
    </S.LoginSuccessWrapper>
  ) : (
    <S.LoginWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputField inputType="email" register={register} error={errors.email} />
      <InputField inputType="password" register={register} error={errors.password} />
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Loading' : 'Submit'}
      </button>
      {errors.root && <div>{errors.root.message}</div>}
    </S.LoginWrapper>
  )
}
