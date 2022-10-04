import React from 'react'
import logo from './lightcast_logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          {`Please edit this app such that the following input accepts any integer and displays the average of all inputs.
          Pressing the 'Clear' button should clear the running average (output should be 'N/A').`}
          <br />
          E.g.
          <br />
          Input: 5; Output: 5
          <br />
          Input: 10; Output: 7.5
          <br />
          Input: 15; Output: 10
          <br />
          Input: 20; Output: 12.5`
        </p>
        <input placeholder='Give me a number!' />
        <div>
          {' '}
          <span style={{ fontStyle: 'bold' }}>Average: </span>OUTPUT HERE
        </div>
        <button>Get Average</button>
        <button>Clear</button>
      </header>
    </div>
  )
}

export default App
