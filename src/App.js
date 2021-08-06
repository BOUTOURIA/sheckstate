import React from 'react'
import './App.css';
import Profile from './Components/Profile.js'


function App() {
  const FullName="Anis"
  const Bio="Finace"
  const Profession="dev"
  return (
    <div className="App">
      <Profile name={FullName}bio={Bio} profession={Profession}>
        {"./pc dell.jpg"}
      </Profile>
    
    </div>
  );
}

export default App;
