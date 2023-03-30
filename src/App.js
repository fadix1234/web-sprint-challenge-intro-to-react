import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  

  

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      setCharacters(response.data);
      console.log('WATERMELON',response.data);
    })
    .catch (err => console.error(err))
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((characters) => (
        // Write some code here to display the name key that belongs to the "char" parameter
        <h2>{characters.name}</h2>
      ))}
    </div>
  );
  }


export default App;
