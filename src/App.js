import { useState } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';
function App() {
const [searchTerm, setSearchTerm] = useState ();
const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};

const posts = [
  {
    id: 1,
    title: "Item 1",
    content: "Item 1 description",
  },
  {
    id: 2,
    title: "keyboard",
    content: "keyboard description",
  },
  {
    id: 3,
    title: "mouse",
    content: "mouse description",
  },
  {
    id: 4,
    title: "desktop",
    content: "desktop description",
  },
  {
    id: 5,
    title: "power supply",
    content: "power supply description",
  },
]

const filterList = posts.filter ((item) =>{
  return item.title.toLocaleLowerCase().includes(searchTerm);
})

  return ( 
    <>
      <Search searchTerm = {searchTerm} handleSearch={handleSearch}/>
      <List  list= {filterList}/>
    </>
  );
}

export default App;
