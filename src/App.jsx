import { useState } from 'react'

function App() {
  let [count,setCount] = useState(0);
  const changeCount = () =>{
    setCount(count+1);
  }


  return(
    <>
    <button onClick={changeCount}>Sara Shaabna {count}</button>
    </>
  );
  
}

export default App
