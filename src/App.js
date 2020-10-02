import React from 'react';
import styled from 'styled-components'
import routes from '../router'

function App() {
  return (
    <SContainer>
      {routes}
    </SContainer>
  )
}

export default App;

const SContainer = styled.div`
`