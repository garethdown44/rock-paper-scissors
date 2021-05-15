import React from 'react'
import Start from './components/start'

function App() {
  return (
    <Start
      onShoot={x => alert(x)}
    />
  )
}

export default App