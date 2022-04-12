import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [counter, setcounter]=useState(100);

  const increase=(data)=>{
    setcounter(counter + data)
  }

  const decrease=(data)=>{
    setcounter(counter - data)
  }
  return(
    <div className="App">
      <h1>The value of counter is : "{counter}"</h1>
      <button onClick={() => increase(1)}>
        <h4>Increase By  :  1</h4>
      </button>
      <button onClick={() => increase(5)}>
        <h4>Increase By  : 5</h4>
      </button>
      <button onClick={() => increase(100)}>
        <h4>Increase By  : 100</h4>
      </button><br/>
      <button onClick={() => decrease(1)}>
        <h4>Decrease By  : 1</h4>
      </button>
      <button onClick={() => decrease(25)}>
        <h4>Decrease By  : 25</h4>
      </button>
      <button onClick={() => decrease(100)}>
        <h4>Decrease By  : 100</h4>
      </button>
    </div>
  );
}

export default App;
