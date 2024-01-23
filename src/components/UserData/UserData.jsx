export const UserData = ({ persons, newUsersData }) => {

  if (!persons || persons.lenght === 0) return <p>Нет данных.</p>;

  return (
    <div className="table_container">
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>userName(Nik)</th>
            <th>email</th>
            <th>adress</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <tr key={person.id}>
              <td>{index + 1}</td>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
              <td>{`${person.address.city}, ${person.address.street}`}</td>
            </tr>
          ))}
          <tr>{newUsersData}</tr>
        </tbody>
      </table>
    </div>
  );
};
