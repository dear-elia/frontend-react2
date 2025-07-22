import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const list  = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'JSX',
    url: 'https://js.js.org/',
    author: 'Andrew Clark',
    num_comments: 0,
    points: 10,
    objectID: 2,
  },
];


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

const App = () => (
      <div>
        <h1>Hello Eldira</h1>

        <Search />

        <h2>
          {welcome.greeting}
          {welcome.title}
        </h2>
        <h3>Hello {getTitle('Eldira')}</h3>
        <ul>
          {list.map((item) => <li key={item.objectID}>{item.title}</li>)}
        </ul>

        <ul>
          {list.map((item) => (
            <li key={item.objectID}> 
              <div>Title: {item.title}</div>
              <div>URL: {item.url}</div>
              <div>Author: {item.author}</div>
              <div>Comments: {item.num_comments}</div>
            </li>
          ))}
        </ul>

        <ul>
          {list.map(function(item){
            return <li key={item.objectID}>{item.title}</li>;
          })}
        </ul>

        {/*showing only the items with more than 2 comments */}
        <ul>
          {list
            .filter(item => item.num_comments >= 2)
            .map(item => (
              <li key={item.objectID}>{item.title}</li>
            ))}
        </ul>

        {/*showing only the items with 5 points */}
        <ul>
          {list
            .filter(item => item.points > 6)
            .map(item => (
              <li key={item.objectID}>{item.title}</li>
            ))}
        </ul>
        
        <ul>
          {list
            .filter(item => item.points > 6)
            .map(item => <li key={item.objectID}>{item.title}</li>)
          }
        </ul>

        <List />
        <TextNew/>
      </div>
);

const List = () => (
    <ul>
      {list.map((item) => (
              <li key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>{' '}
                <span>{item.author}</span>{' '}
                <span>{item.num_comments}</span>{' '}
                <span>{item.points}</span>
              </li>
      ))}
    </ul>
);

const Search = () => {
  const handleChange = (event) =>{
    console.log(event);
    console.log(event.target.value);
  }
  return (
    <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' onChange={handleChange}/>
 </div>
  );
};

function TextNew() {
  const [text, setText] = React.useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleBlur(event){
    console.log('Lost the focus of input field')
  }

  return (
    <div>
      <input type="text" value = {text} onChange={handleChange} onBlur={handleBlur}/>{text}
    </div>
  );
}


export default App
