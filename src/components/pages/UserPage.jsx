import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const UserPage = () => {
  const [viewUsers, setViewUsers] = useState([]);
  const { id } = useParams();

  const allUsers = async () => {
    const viewUsers = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setViewUsers(viewUsers.data);
  };

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <div>
      <h1>User №{id}</h1>
      <div className="table_container">
            {viewUsers.map((user) => (
              <div key={user.id}>
                <p>№:</p>
                <p>{user.id}</p>
                <p>Name:</p>
                <p>{user.name}</p>
                <p>UserName(Nik)</p>
                <p>{user.username}</p>
                <p>Email:</p>
                <p>{user.email}</p>
                <p>Adress</p>
                <p>{`${user.address.city}, ${user.address.street}`}</p>
              </div>
            ))}
      </div>
    </div>
  );
};
