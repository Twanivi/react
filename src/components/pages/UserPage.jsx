import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  const [viewUsers, setViewUsers] = useState([]);
  const { id } = useParams();
  console.log("from use Params", id);

  const allUsers = async () => {
    console.log("id", id);
    const viewUsers = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setViewUsers(viewUsers.data);
  };

  useEffect(() => {
    allUsers();
  }, []);

  console.log("viewUsers", viewUsers);

  return (
    <div className="user-page">
      <h1>User №{id}</h1>
      <div className="card-wrapper">
        <div key={viewUsers.id}>
          <div className="card">
            <p className="title">Name:</p>
            <p>{viewUsers.name}</p>
          </div>
          <div className="card">
            <p className="title">UserName(Nik):</p>
            <p>{viewUsers.username}</p>
          </div>
          <div className="card">
            <p className="title">Email:</p>
            <p>{viewUsers.email}</p>
          </div>
          <div className="card">
            <p className="title">Adress:</p>
            {/* <p>{`${viewUsers.address.city}, ${viewUsers.address.street}`}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
