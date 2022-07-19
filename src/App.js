import './App.css'
import React from 'react';
import {useState} from 'react'
import MainMenu from './components/MainMenu';
import CreateACharacter from './components/CreateACharacter';

function App() {
  const [screen, setScreen] = useState('main')

  return (
    <div>
    {
      screen === 'main' ? <MainMenu setScreen={setScreen} /> : <CreateACharacter />
    }
    </div>
  );
}

export default App;
