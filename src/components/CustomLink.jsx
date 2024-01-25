import { Link } from "react-router-dom"

export const CustomLink = ({text, path}) => {
    return (
        <Link to={`/${path}`}>{text}</Link>
    )
}