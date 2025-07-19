import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//defining the function 
function getTitle(title){
  return title;
}

//JS object 
const welcome = {
  greeting: 'Hey',
  title: 'React',
};

//JS string primitive
const title = 'React';

function App() {
  return (
      <div>
        <h1>Hello Eldira</h1>

        <label htmlFor='search'>Search: </label>
        <input id='search' type='text' />
        <h2>
          {welcome.greeting}
          {welcome.title}
        </h2>
        <h3>Hello {getTitle('Eldira')}</h3>
      </div>
  );
}

export default App
