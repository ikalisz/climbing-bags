import React from 'react'
import styled from 'styled-components'
import {
  useSelector,
} from 'react-redux'

function Home() {
  const user = useSelector(state => state.user)
  return (
    <SContainer>
      
    </SContainer>
  )
}

export default Home

const SContainer = styled.div`
  display: flex;
`