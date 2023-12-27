export const TableHead = ({columns}) => {
    return (
        <thead>
            <tr>
                {columns.map(({label, key}) => <th key={key}>{label}</th> )}
            </tr>
        </thead>
    )
}