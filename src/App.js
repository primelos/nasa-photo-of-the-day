import React from "react";
import "./App.css";

import Asteroids from './components/Asteroids'
import Galaxy from './components/Galaxy'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Galaxy />
      <Asteroids />
    </div>
  );
}

export default App;
