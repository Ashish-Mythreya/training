import React, { useState } from "react";
import "./App.css"; // Include your CSS file

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode); // Add this line to toggle the dark mode class on the body element
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <header>
        <h1>Light/Dark Toggle & Counter</h1>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={toggleDarkMode}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </header>
      <main>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </main>
    </div>
  );
};

export default App;
