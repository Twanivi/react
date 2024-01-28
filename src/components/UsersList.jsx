import { Users } from "./Users"

export const UsersList = ({userCom}) => {
    return (
        <div>
            {userCom.map((user) => {
                return <Users user={user} key={user.id}/>
            })}
        </div>
    )
}