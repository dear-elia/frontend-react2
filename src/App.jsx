import * as React from 'react'
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

const App = () => {
  console.log('App renders');

  const stories = [
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
  ];

  const handleSearch = (event)=>{
    console.log(event.target.value);
  };

  return (
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
        
        <h1>My Hacker Stories</h1>
        
        <Search onSearch={handleSearch}/>

        <List list={stories} />
        <TextNew/>
      </div>
  );
};


/*We accceot and use list from props instead of using global scope
and it loops over the list and renders Item component for each time*/

const List = (props) => (
    <ul>
      {props.list.map((item) => (
        <Item key = {item.objectID} item = {item} />
      ))}
    </ul>
);


const Item = (props) =>(
  <li>
   <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

const Search = (props) => {

  //let searchTerm = '';
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) =>{
    setSearchTerm(event.target.value);

    console.log("Execute the callback function");
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange}/>

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
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
