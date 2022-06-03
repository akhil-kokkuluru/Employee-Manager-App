import {Component} from 'react'
import {AgGridReact} from 'ag-grid-react'
import './index.css'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import {Redirect} from 'react-router-dom'

class Home extends Component {
  state = {
    columnDefs: [
      {field: 'id'},
      {field: 'first_name'},
      {field: 'last_name'},
      {field: 'email'},
      {field: 'number'},
      {field: 'gender'},
      {field:"Modify", cellRendererFramework:(params)=><div><button>Edit</button> <button>Delete</button></div>}
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

  onAddclick = props => {
    const {history} = props
    console.log(history)
    history.replace('/employee/add')
  }

  render() {
    const {rowData, columnDefs} = this.state

    return (
      <div className="tableContainer">
        <h1>Employee Manager</h1>
        <button type="button" className="addButton" onClick={this.onAddclick}>
          Add
        </button>

        <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
      </div>
    )
  }
}

export default Home
