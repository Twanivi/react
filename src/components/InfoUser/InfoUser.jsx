export const InfoUser = ({person}) => {
    return (
        <div>
            {
            <div key={person.id}>
                <p>Id: {person.id}</p>
                <p>Name: {person.name}</p>
                <p>Nik: {person.username}</p>
                <p>Email: {person.email}</p>
                <p>Address: {`${person.address.city}, ${person.address.street}`}</p>
            </div>
            }
        </div>
    )
}

