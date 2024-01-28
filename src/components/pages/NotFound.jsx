import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="not-found">
            This page does not exist. Go 
            <Link to='/'>HOME</Link>
        </div>
    )
}