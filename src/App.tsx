import React from 'react'
import MainContainer from './components/main-container'
import Start from './components/start'

function App() {
  return (
    <MainContainer>
      <Start
        onShoot={x => alert(x)}
      />
    </MainContainer>
  )
}

export default App