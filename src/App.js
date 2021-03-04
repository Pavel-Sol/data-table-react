import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import _ from 'lodash'
import './App.css'
import Loader from './components/Loader/Loader'
import Table from './components/Table/Table'
import DetailRowView from './components/DetailRowView/DetailRowView'
import ModeSelection from  './components/ModeSelection/ModeSelection'
import ReactPaginate from 'react-paginate'

class App extends React.Component {

  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    sort: 'asc',
    sortField: 'id',
    row: null,
    currentPage: 0
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
    data,
    sort,
    sortField
  }) 
}

onRowSelect = row => {
  this.setState({row})
}

pageChangeHandler = ({selected}) => {
  this.setState({
    currentPage: selected
  })
}


  render() {
    const pageSize = 50
    if(!this.state.isModeSelected ) {
      return (
        <div className='container'>
          <ModeSelection onSelected= {this.modeSelectHandler}/>
        </div>
      )
    }


    const displayData = _.chunk(this.state.data, pageSize)[this.state.currentPage]

    return (
      <div className='container'>
        
        {
          this.state.isLoading
          ? <Loader />
          : <Table data={displayData}
          onSort={this.onSort}
          sort={this.state.sort}
          sortField={this.state.sortField} 
          onRowSelect={this.onRowSelect}/>
        }

        {
          this.state.data.length > pageSize
          ? <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={20}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.pageChangeHandler}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          nextClassName='page-item'
          previousLinkClassName='page-link'
          nextLinkClassName='page-link'
          forcePage={this.state.currentPage}/>
          : null
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
