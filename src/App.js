import React from "react";
import "./App.css";
import Galaxy from './components/Galaxy'
import styled from "styled-components";


const MainP = styled.div`
background-color: #6363b1;
`
function App() {
  return (
    <MainP className="App">
      {<p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>}
      <Galaxy />
      
    </MainP>
  );
}

export default App;
