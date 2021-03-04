import { useState } from 'react'


function TableSearch(props) {
   const [value, setValue] = useState('')

   const valueChangeHandler = event => {
      setValue(event.target.value)
   }

   return (
      <div className="input-group mb-3 mt-5">
         <div className="input-group-prepend">
            <button onClick={() => props.onSearch(value)} className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
         </div>
         <input onChange={valueChangeHandler} value={value} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
      </div>
   )
}

export default TableSearch