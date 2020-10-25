import React, {
  useState,
} from 'react'
import styled from 'styled-components'

function Auth() {
  const [
    username,
    setUsername,
  ] = useState('')
  const [
    password,
    setPassword,
  ] = useState('')
  const login = () => {
    const user = {
      username,
      password,
    }

    api.post('/login', user)
      .then()
  }

  const signout = () => {
    return
  }

  return (
    <SContainer>
      <input type="text" onChange={(e => setUsername(e.target.value))} />
    </SContainer>
  )
}

export default Auth

const SContainer = styled.div`
  display: flex;
`

const SForm = styled.form`
`