import React from 'react'
import styled from 'styled-components'
import {
  useSelector,
} from 'react-redux'
import Authentication from '../Authentication'

function Home() {
  const user = useSelector(state => state.user)
  const authComponent = auth ? (
    <Authentication />
  ) : null
  return (
    <SContainer>
      {authComponent}
    </SContainer>
  )
}

export default Home

const SContainer = styled.div`
  display: flex;
`