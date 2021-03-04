import React from 'react'
import Direction from './Direction/Direction'
import './Table.css'

function Table(props) {
   return (
      <table className='table'>
         <thead>
            <tr>
               <th onClick={props.onSort.bind(null, 'id')}>
                  id{props.sortField === 'id' ? <> <Direction sort={props.sort} /></> : null}
               </th>
               <th onClick={props.onSort.bind(null, 'firstName')}>
                  First Name{props.sortField === 'firstName' ? <> <Direction sort={props.sort} /></> : null}
               </th>
               <th onClick={props.onSort.bind(null, 'lastName')}>
                  Last Name{props.sortField === 'lastName' ? <> <Direction sort={props.sort} /></> : null}
               </th>
               <th onClick={props.onSort.bind(null, 'email')}>
                  Email{props.sortField === 'email' ? <> <Direction sort={props.sort} /></> : null}
               </th>
               <th onClick={props.onSort.bind(null, 'phone')}>
                  Phone{props.sortField === 'phone' ? <> <Direction sort={props.sort} /></> : null}
               </th>
            </tr>
         </thead>
         <tbody>
            {
               props.data.map(item => {
                  return <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
                     <td>{item.id}</td>
                     <td>{item.firstName}</td>
                     <td>{item.lastName}</td>
                     <td>{item.email}</td>
                     <td>{item.phone}</td>
                  </tr>
               })
            }
         </tbody>
      </table>
   )
}

export default Table