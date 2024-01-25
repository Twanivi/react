import { UserData } from "../UserData/UserData"

export const UsersList = ({users}) => {
    return (
        <div>
            {users.map((user) => {
                return <UserData person={user} key={user.id} />
            })}
        </div>
    )
}