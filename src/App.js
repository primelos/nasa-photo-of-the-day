import React from "react";
import "./App.css";
import Galaxy from './components/Galaxy'
import Asteroids from './components/Asteroids'


function App() {
  return (
    <div className="App">
      {<p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>}
      <Galaxy />
      
    </div>
  );
}

export default App;
