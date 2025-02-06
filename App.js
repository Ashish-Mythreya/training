import React from 'react';
import './App.css';
import Welcome from './Welcome';

// const Welcome=()=><h1 className='message'>Hello Charan</h1>

// function App(){
//   return(
//     <div className='App'>
//         <Welcome/>  
//     </div>
//   )
// }

const App=()=>{
  return(
    <div style={{textAlign:'center',color:'blue'}}>
      <Welcome greeting="Good morning" name="Charan"/>
      <Welcome greeting="Hii" name="Murali"/>
    </div>
  )
}
export default App;