import { useState } from "react";
// import ChildA from "./childA";
// import ChildB from "./childB";

// const Parent = () => {
//   const [count, setCount] = useState(0);
  
//   const increment = () => {
//     setCount(c => c + 1);
//   };

//   return (
//     <div>
//       <ChildA />
//       <ChildB count={count} increment={increment} />
//     </div>
//   );
// };

// export default Parent;

//user 1 component
//import React, { createContext, useContext } from "react";

// User Data
// const user = {
//   name: "John Doe",
//   email: "johndoe@example.com",
// };

// // --- Prop Drilling Approach ---
// const Profile = ({ user }) => (
//   <div>
//     <h2>Profile</h2>
//     <p>Name: {user.name}</p>
//     <p>Email: {user.email}</p>
//   </div>
// );

// const MiddleComponent = ({ user }) => <Profile user={user} />;

// const AppWithProps = () => <MiddleComponent user={user} />;

// // --- React Context Approach ---
// const UserContext = createContext();

// const ProfileWithContext = () => {
//   const user = useContext(UserContext);
//   return (
//     <div>
//       <h2>Profile (Using Context)</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// const MiddleComponentWithContext = () => <ProfileWithContext />;

// const AppWithContext = () => (
//   <UserContext.Provider value={user}>
//     <MiddleComponentWithContext />
//   </UserContext.Provider>
// );

// // Main App Component to render both approaches
// export default function App() {
//   return (
//     <div>
//       <h1>Prop Drilling vs Context</h1>
//       <h3>Using Prop Drilling:</h3>
//       <AppWithProps />
//       <h3>Using React Context:</h3>
//       <AppWithContext />
//     </div>
//   );
// }
import React, { useReducer } from 'react';
import appleFruit from './apple-fruit.jpg'; // Adjust the path if needed

// reducer function to track number of apples
function appleReduce(state = 3, action) {
  switch (action.type) {
    case 'ADD_APPLE':
      return state + 1;
    case 'EAT_APPLE':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(appleReduce);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Apple Counter</h1>
      <div style={{ marginTop: '20px' }}>
        <img src={appleFruit} alt="apple" width="50" height="50" />
        <img src={appleFruit} alt="apple" width="50" height="50" />
        <img src={appleFruit} alt="apple" width="50" height="50" />
      </div>
      <p>Number of apples: {state}</p>
      <button onClick={() => dispatch({ type: 'ADD_APPLE' })}>ADD APPLE</button>
      <button onClick={() => dispatch({ type: 'EAT_APPLE' })}>EAT APPLE</button>
    </div>
  );
}

export default App;
