/* eslint-disable react/jsx-props-no-spreading */

import { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function LoginForm() {
  const [showSignUp, setShowSignUp] = useState<boolean>(false)

  return !showSignUp ? <SignIn setShowSignUp={setShowSignUp} /> : <SignUp setShowSignUp={setShowSignUp} />
}
