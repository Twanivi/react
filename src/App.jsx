import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserData } from "./components/UserData/UserData";
import { FormUsers } from "./components/FormUsers/FormUsers";

function App() {
  const [users, setUsers] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    address: {
      city: '',
      street: '',
    },
  });

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
  }, [setAppState]);

  return (
    <div className="app">
      <FormUsers users={users} setUsers={setUsers} />
      {appState.loading ? (
        <h1>Подождите, данные загружаются!</h1>
      ) : (
        <UserData persons={appState.persons} users={users} />
      )}
    </div>
  );
}

export default App;
