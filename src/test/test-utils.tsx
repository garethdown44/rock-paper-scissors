import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import createStore from '../redux/store'

function render(ui : any, { store = createStore(), ...renderOptions } = {}) {
  function Wrapper({ children } : { children: any }) {
    return <Provider store={store}>{children}</Provider>
  }

  const options : any = { wrapper: Wrapper, ...renderOptions }

  return rtlRender(ui, options)
}

export * from '@testing-library/react'
export { render }