export const UserData = ({persons, setAppState}) => {

  const onRowSelect = (row) =>
  setAppState({
    loading: false,
    persons: persons,
    row: { row },
  });

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
          {persons.map((person) => (
            <tr key={person.id} onClick={onRowSelect.bind(null, person)}>
              <td onClick={onRowSelect.bind(null, person)}>{person.id}</td>
              <td  onClick={onRowSelect.bind(null, person)}>{person.name}</td>
              <td onClick={onRowSelect.bind(null, person)}>{person.username}</td>
              <td  onClick={onRowSelect.bind(null, person)}>{person.email}</td>
              <td onClick={onRowSelect.bind(null, person)}>{`${person.address.city}, ${person.address.street}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
