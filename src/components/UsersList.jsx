import { Users } from "./Users"

export const UsersList = ({users}) => {
    return (
        <div>
            {users.map((user) => {
                return <Users user={user} key={user.id}/>
            })}
        </div>
    )
}