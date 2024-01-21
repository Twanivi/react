import './App.css';
import { Table } from './components/Table/Table';
import tableData1 from './tableData1.json';

const columns = [
  {label: "Full Name", key: "full_name", sortable: true},
  {label: "Gender", key: "gender", sortable: true, sortbyOrder: "desc"},
  {label: "Age", key: "age", sortable: true},
  {label: "Email", key: "email", sortable: false}
]

function App() {
  return (
    <div>
      <h1>Sortable table React</h1>
      <Table columns={columns} data={tableData1} />
    </div>
  )
}

export default App
