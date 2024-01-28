import React, { useContext, useEffect, useState } from "react";
import { usersService } from "./usersService";
import { UsersList } from "./UsersList";
import { UserForm } from "./UserForm/UserForm";
import { UserCompanyContext } from "../context/UserCompanyContext";

export const Main = () => {
    const {userCom, setUserCom} = useContext(UserCompanyContext);

    const addUser = (newUser) => {
        setUserCom([...userCom, newUser]);
    }

    async function getUsersFromServer() {
        const getUsers = await usersService.getAllUsers();
        setUserCom(getUsers)
    }

    useEffect(() => {
        getUsersFromServer();
    }, [])

    return (
        <div className='main'>
            <div>
                <UserForm addUser={addUser} />
            </div>
             <div>
                <UsersList userCom={userCom} />
             </div>
        </div>
    )
}