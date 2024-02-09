import { useGetUsersQuery } from "../../reducers/userReducer";
import { Person } from "../Person/Person"

export const UserData = () => {
    const {data: persons} = useGetUsersQuery();

    if (!persons || persons.lenght === 0) return <p>Нет данных.</p>;

    return (
        <div className="table_container">
            <table className="table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>UserName(Nik)</th>
                        <th>Email</th>
                        <th>Adress</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person, index) => (
                        <Person person={person} key={person.id} index={index}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}