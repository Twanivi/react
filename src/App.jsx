import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { UserData } from './components/UserData/UserData';
import { FormUsers } from './components/FormUsers/FormUsers';
import { useDispatch } from 'react-redux';
import { SET_USER } from './store/userReducer';

function App() {
  const dispatch = useDispatch();

  const [appState, setAppState] = useState(false);
  
  useEffect(() => {
    setAppState(true)
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(false);
      dispatch({type: SET_USER, payload: allPersons})
    });
  }, []);

  return (
    <div className='app'>
      <FormUsers />
      {appState ? (
        <h1>Подождите, данные загружаются!</h1>
      ) : (
        <UserData />
      )}
    </div>
  )
}

export default App
