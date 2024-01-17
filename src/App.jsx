import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { UserData } from './components/UserData/UserData';
import {OnLoadingUserData} from './components/OnLoadingPersonsData/OnLoadingPersonsData';
import { FormUsers } from './components/FormUsers/FormUsers';

function App() {

  const DataLoading = OnLoadingUserData(UserData);

  const [appState, setAppState] = useState(
    {
      loading: false,
      persons: null
    }
  );
  
  useEffect(() => {
    setAppState({loading: true})
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState({
        loading: false,
        persons: allPersons
      });
    });
  }, [setAppState]);

  const [formInputData, setFormInputData] = useState({
    name: '',
    username: '',
    email: '',
    address: ''
  })

  return (
    <div className='app'>
      <FormUsers  setFormInputData={setFormInputData}/>
      <DataLoading isLoading={appState.loading} persons={appState.persons} formInputData={formInputData}/>
    </div>
  )
}

export default App
