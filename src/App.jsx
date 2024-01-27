import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserData } from "./components/UserData/UserData";
import { FormUsers } from "./components/FormUsers/FormUsers";
// import {InfoUser} from "./components/InfoUser/InfoUser";

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    persons: null,
    row: null
  });

  const addUser = (newUser) => {
    setAppState((prevState) => ({
      loading: prevState.loading,
      persons: [...prevState.persons, newUser],
      row: prevState.row
    }));
}

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState({
        loading: false,
        persons: allPersons,
        row: null
      });
    });
  }, [setAppState]);

  

  return (
    <div className="app">
      <FormUsers addUser={addUser} />
      {appState.loading ? (
        <h1>Подождите, данные загружаются!</h1>
      ) : (
        <UserData persons={appState.persons} setAppState={setAppState}/>
      )} 
    </div>
  );
}

export default App;
