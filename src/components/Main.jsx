import React, { useEffect, useState} from "react";
import { usersService } from "./usersService";
import { UsersList } from "./UsersList";
import { UserForm } from "./UserForm";


export const Main = () => {
    const [users, setUsers] = useState([]);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    }

    async function getUsersFromServer() {
        const newUsers = await usersService.getAllUsers();
        setUsers(newUsers)
    }

    useEffect(() => {
        getUsersFromServer();
    }, [])

    return (
        <div className="main">
            <UserForm addUser={addUser} /> 
            <UsersList users={users} />
        </div>
    )
}