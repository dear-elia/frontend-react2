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
  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = (event)=>{
    setSearchTerm(event.target.value);
  };


  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
      <div>
        <h1>My Hacker Stories</h1>
        
        <Search search = {searchTerm} onSearch={handleSearch} />
        <List list={searchedStories} />

      </div>
  );
};


/*We accceot and use list from props instead of using global scope
and it loops over the list and renders Item component for each time*/

const Item = ({item}) => (
  <li>
   <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key = {item.objectID} item = {item} />
    ))}
  </ul>
);

//using block body
const Search = ({search, onSearch }) => (
    <div> 
    <label htmlFor='search'>Search: </label>
    <input 
      id ='search' 
      type="text" 
      value={search} 
      onChange={onSearch}/>
  </div>
);


export default App
