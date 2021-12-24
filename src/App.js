import React , { useState } from 'react'

function App() {

  const [ myName , setMyName ] = useState('Subham Banerjee');

  const changeName = () => {
    if( myName === 'Subham Banerjee')
     {
       setMyName('Subham Rocks');
     }
     else
     {
      setMyName('Subham Banerjee');
     }
      }

  return (
    <div className="App">
      <h1>{ myName }</h1>
      <button className = "btn" onClick={changeName}>Click Me Please</button>
    </div>
  );
}

export default App;
