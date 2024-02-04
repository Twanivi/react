import './App.css';
import { useEffect } from 'react';
import { UserData } from './components/UserData/UserData';
import { FormUsers } from './components/FormUsers/FormUsers';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from './actions/users/usersActions';

function App() {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(setUsers())
  }, []);

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
      {loading ? <h1>Подождите, данные загружаются!</h1> : <UserData />}
    </div>
  )
}

export default App
