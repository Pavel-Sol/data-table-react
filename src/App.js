import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import _ from 'lodash'
import './App.css'
import Loader from './components/Loader/Loader'
import Table from './components/Table/Table'
import DetailRowView from './components/DetailRowView/DetailRowView'
import ModeSelection from  './components/ModeSelection/ModeSelection'

class App extends React.Component {

  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    sort: 'asc',
    sortField: 'id',
    row: null,
  }


  modeSelectHandler = (url) => {
    this.setState({
      isModeSelected: true,
      isLoading: true
    })
    this.fetchData (url)
  }

async fetchData (url) {
  const response = await fetch(url)

  const data = await response.json()

  this.setState({
    isLoading: false,
    data: _.orderBy(data, this.state.sortField, this.state.sort)
  })
}


onSort = sortField => { 
  let clonedData = this.state.data.concat()
  let sort = this.state.sort === 'asc' ? 'desc' : 'asc'
  let data = _.orderBy(clonedData, sortField, sort)

  this.setState({
    data: data,
    sort: sort,
    sortField: sortField
  }) 
}

onRowSelect = row => {
  this.setState({row})
}




  render() {
    if(!this.state.isModeSelected ) {
      return (
        <div className='container'>
          <ModeSelection onSelected= {this.modeSelectHandler}/>
        </div>
      )
    }


    return (
      <div className='container'>
        
        {
          this.state.isLoading
          ? <Loader />
          : <Table data={this.state.data}
          onSort={this.onSort}
          sort={this.state.sort}
          sortField={this.state.sortField} 
          onRowSelect={this.onRowSelect}/>
        }

        {
           this.state.row
           ? <DetailRowView person={this.state.row} />
           : null
        }
      </div>
     );
  }
}

export default App;
