import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { SubmitHandler, UseFormSetError } from 'react-hook-form'
import { auth } from '../../firebase/index'

type FormFields = {
  email: string
  password: string
}

export const useSignUp = (setError: UseFormSetError<FormFields>) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
      createUserWithEmailAndPassword(auth, data.email, data.password).then(userCredential => {
        const { user } = userCredential
        if (user) {
          setIsSignUp(true)
        }
      })
    } catch (err) {
      setError('email', {
        message: 'This email is already Taken',
      })
    }
  }
  return { isSignUp, onSubmit }
}
