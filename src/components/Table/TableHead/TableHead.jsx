import {useState} from 'react';

export const TableHead = ({columns, handleSorting}) => {

    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor) => {
        const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc';
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    }

    return (
        <thead>
            <tr>
                {columns.map(({label, key, sortable}) => {
                    const cl = sortable 
                        ? sortField === key && order === 'asc'
                            ? "up"
                            : sortField === key && order === 'desc'
                                ? "down"
                                : "default"
                        : "";

                    return (
                        <th 
                            onClick={sortable ? () => handleSortingChange(key) : null} 
                            key={key}
                            className={cl}
                        >
                            {label}
                        </th> 
                    )
                })}
            </tr>
        </thead>
    )
}