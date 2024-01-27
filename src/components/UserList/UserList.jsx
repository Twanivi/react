import { UserData } from "../UserData/UserData";
import {InfoUser} from "../InfoUser/InfoUser"

export const UsersList = ({ users }) => {
  

  return (
    <div>
      {users.map((user) => {
        return (
          <UserData persons={user} key={user.id} />
        );
      })}
      {row ? <InfoUser person={row} /> : null}
    </div>
  );
};
