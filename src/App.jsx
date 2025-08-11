import * as React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const App = () => {

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
    {
      title: 'Java',
      url: 'https://java.org/',
      author: 'Javist',
      num_comments: 2,
      points: 10,
      objectID: 2,
    },
  ];

  //define the state in App component in order to get rid of duplication in App and Search
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event)=>{
    setSearchTerm(event.target.value);
  };


  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
      <div>
        <h1>My Hacker Stories</h1>
        
        <Search onSearch={handleSearch}/>
        <List list={searchedStories} />

      </div>
  );
};


/*We accceot and use list from props instead of using global scope
and it loops over the list and renders Item component for each time*/

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

const List = (props) => (
    <ul>
      {props.list.map((item) => (
        <Item key = {item.objectID} item = {item} />
      ))}
    </ul>
);



const Search = (props) => (
  <div>
    <label htmlFor='search'>Search: </label>
    <input id ='search' type="text" onChange={props.onSearch}/>
  </div>
);

export default App
