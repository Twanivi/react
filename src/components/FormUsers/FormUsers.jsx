import './FormUsers.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER } from "../../store/userReducer";

export const FormUsers = () => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState(10);
  const [userName, setUserName] = useState("");
  const [userNik, setUserNik] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressStreet, setAddressStreet] = useState("");

  const addNewUser = (event) => {
    event.preventDefault();
    setUserId((prevState) => {
      dispatch({
        type: ADD_USER,
        payload: {
          id: prevState + 1,
          name: userName,
          username: userNik,
          email: userEmail,
          address: {
            city: addressCity,
            street: addressStreet,
          },
        },
      });
      return prevState + 1;
    });

    setUserName("");
    setUserNik("");
    setUserEmail("");
    setAddressCity(""); 
    setAddressStreet("");
  };

  const handleChangeName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeNik = (event) => {
    setUserNik(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const handleChangeCity = (event) => {
    setAddressCity(event.target.value);
  };

  const handleChangeStreet = (event) => {
    setAddressStreet(event.target.value);
  };

  return (
    <div className='form-container'>
      <form onSubmit={addNewUser} className="form-user">
        
          <p>Name:</p>
          <input value={userName} onChange={handleChangeName} />
          <p>Nik:</p>
          <input value={userNik} onChange={handleChangeNik} />
          <p>Email:</p>
          <input value={userEmail} onChange={handleChangeEmail} />
          <p>City:</p>
            <input value={addressCity} onChange={handleChangeCity} />
            <p>Street:</p>
            <input value={addressStreet} onChange={handleChangeStreet} />

        <div>
          <button>Create new Profile</button>
        </div>
      </form>
    </div>
  );
};


