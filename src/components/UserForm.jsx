import { Button } from "./Button/Button";
import { Input } from "./Input/Input";
import { useState } from "react";

export const UserForm = ({ addUser }) => {
  const [userId, setUserId] = useState(10);
  const [userName, setUserName] = useState("");
  const [userNik, setUserNik] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressStreet, setAddressStreet] = useState("");

  const addNewUser = (event) => {
    event.preventDefault();
    setUserId(prevState => ++prevState);
    const newUser = {
      id: userId,
      name: userName,
      username: userNik,
      email: userEmail,
      address: {
        city: addressCity,
        street: addressStreet,
      },
    };
    addUser(newUser)
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

  <div className='form-container'>
      <form onSubmit={addNewUser} className="form-user">
          <p>Name:</p>
          <Input value={userName} onChange={handleChangeName} />
          <p>Nik:</p>
          <Input value={userNik} onChange={handleChangeNik} />
          <p>Email:</p>
          <Input value={userEmail} onChange={handleChangeEmail} />
          <p>City:</p>
            <Input value={addressCity} onChange={handleChangeCity} />
            <p>Street:</p>
            <Input value={addressStreet} onChange={handleChangeStreet} />
        <div>
          <Button text='Create new Profile'></Button>
        </div>
      </form>
    </div>
};
