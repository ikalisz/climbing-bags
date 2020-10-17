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
  }

  return (
    <SContainer>
      
    </SContainer>
  )
}

export default Auth

const SContainer = styled.div`
  display: flex;
`

const SForm = styled.form`
`