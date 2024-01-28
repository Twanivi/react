import { CustomLink } from "./CustomLink";


export const Users = ({user}) => {
    return (
        <div className="users">
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
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{`${user.address.city}, ${user.address.street}`}</td>
              </tr>
            
          </tbody>
        </table>
      </div>

            <div className="user-btn">
                <CustomLink path={`/users/${user.id}`} text='View User' />
            </div>
        </div>
    )
}

