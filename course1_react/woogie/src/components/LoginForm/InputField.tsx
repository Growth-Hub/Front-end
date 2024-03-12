/* eslint-disable react/jsx-props-no-spreading */

import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form'

type FormFields = {
  email: string
  password: string
}

type InputType = 'email' | 'password'

type Props = {
  register: UseFormRegister<FormFields>
  inputType: InputType
  error: FieldError | undefined
}
const getRegisterOptions = (inputType: InputType) => {
  if (inputType === 'email') {
    const emailRegisterOption: RegisterOptions = {
      validate: (value: string) => {
        if (!value.includes('@')) {
          return 'Email must include @'
        }

        return true
      },
    }
    return emailRegisterOption
  }

  if (inputType === 'password') {
    const passwordRegisterOption: RegisterOptions = {
      required: 'Password is required',

      minLength: { value: 8, message: 'Password must at least 8 characters' },
    }

    return passwordRegisterOption
  }
  return undefined
}

export default function InputField({ register, inputType, error }: Props) {
  return (
    <>
      <input
        {...register(inputType, getRegisterOptions(inputType) as RegisterOptions)}
        type={inputType === 'password' ? 'password' : 'text'}
        placeholder={inputType}
      />
      {error && <div>{error.message}</div>}
    </>
  )
}
