import { useDispatch } from "react-redux";
import { deleteUser } from "../../reducers/userReducer";

export const Person = ({ person, index }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id))
  };

  return (
    <tr key={person.id}>
      <td>{index + 1}</td>
      <td>{person.name}</td>
      <td>{person.username}</td>
      <td>{person.email}</td>
      <td>{`${person.address.city}, ${person.address.street}`}</td>
      <td>
        <button onClick={() => handleDeleteUser(person.id)}>Delete</button>
      </td>
    </tr>
  );
};
