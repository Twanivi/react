import { useState } from 'react';
import { TableHead } from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';
import tableData1 from '../../tableData1.json';
import columns1 from '../../columns1.json';
import './Table.css'


export const Table = () => {

    const [tableData, setTableData] = useState(tableData1);

    const [columns, setColumns] = useState(columns1);

    const handleSortData1 = () => {
        setTableData(prevState => prevState.sort((a, b) => a.name.localeCompare(b.name)))
    }

    const handleSortData3 = () => {
        setTableData(prevState => prevState.sort((a, b) => a.age.toString().localeCompare(b.age.toString(), 'en', {numeric: true
        })))
    }

    

    // setColumns({
    //     data: 
    // })

    return (
        <table className='table'>
            <TableHead columns={columns} />
            <TableBody columns={columns} tableData={tableData} />
        </table>
    )
}