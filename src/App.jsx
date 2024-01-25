import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserData } from "./components/UserData/UserData";
import { FormUsers } from "./components/FormUsers/FormUsers";
import { UsersList } from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
}

  const [appState, setAppState] = useState({
    loading: false,
    persons: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState({
        loading: false,
        persons: allPersons,
      });
    });
    setUsers(newUser)
  }, [setAppState]);

  

  return (
    <div className="app">
      <FormUsers addUser={addUser} />
      {appState.loading ? (
        <h1>Подождите, данные загружаются!</h1>
      ) : (
        <UserData persons={appState.persons} />
      )}
      <UsersList users={users}/>
    </div>
  );
}

export default App;
