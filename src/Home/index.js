import {Component} from 'react'
import {AgGridReact} from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

class Home extends Component {
  state = {
    columnDefs: [
      {field: 'id'},
      {field: 'first_name'},
      {field: 'last_name'},
      {field: 'email'},
      {field: 'number'},
      {field: 'gender'},
    ],
    rowData: [],
  }

  componentDidMount() {
    this.apicall()
  }

  apicall = async () => {
    const response = await fetch(
      'https://6149991107549f001755a471.mockapi.io/employees/employees',
    )
    const data = await response.json()
    this.setState({rowData: data})
    console.log(data)
  }

  render() {
    const {rowData, columnDefs} = this.state
    return (
      <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
        <h1>Employee Manager</h1>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    )
  }
}

export default Home
