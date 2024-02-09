import './App.css';
import { UserData } from './components/UserData/UserData';
import { FormUsers } from './components/FormUsers/FormUsers';
import { useGetUsersQuery } from './reducers/userReducer';

function App() {
  const {isLoading, error} = useGetUsersQuery();

  if (error) {
    return (
      <div className='app'>
        <h1>Произошла ошибка запроса!</h1>
      </div>
    )
  }
  
  return (
    <div className='app'>
      <FormUsers />
      {isLoading ? <h1>Подождите, данные загружаются!</h1> : <UserData />}
    </div>
  )
}

export default App
