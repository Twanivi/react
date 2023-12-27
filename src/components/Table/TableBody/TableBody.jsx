export const TableBody = ({columns, tableData}) => {
    return (
        <tbody>
            {tableData.map(data => {
                return (
                <tr key={data.id}>
                    {columns.map(({key}) => {
                         if(data[key]) {
                            return (
                        <td key={key}>{data[key]}</td>
                        )
                    } else {
                            return (
                                <td key={key}>Нет данных</td>
                                )
                        }
                    })}
                </tr>
            )})}
        </tbody>
    )
}