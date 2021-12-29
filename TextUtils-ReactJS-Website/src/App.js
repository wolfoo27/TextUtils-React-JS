import './App.css';
import React, {useState} from 'react'
import Navbar from './Navbar' 
import TextForm from './TextForm';
import About from './About.js'
function App() {
const [mode,setMode] = useState('dark')
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces"/>
      </div>
    </>
  );
}

export default App;
