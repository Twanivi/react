import React from "react";
import { NavLink } from "react-router-dom";

const setIsActive = ({isActive}) => isActive ? 'active-link' : '';

export const Header = () => {
    return (
        <div>
            <div className="header">
                <NavLink to={''} style={({isActive}) => ({color: isActive ? 'pink' : ''})}>Home</NavLink>
                <NavLink to={'users'} className={setIsActive}>Users</NavLink>
            </div>
        </div>
    )
}