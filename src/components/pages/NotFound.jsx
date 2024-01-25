import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            This page does not exist. Go 
            <Link to='/'>HOME</Link>
        </div>
    )
}