function ModeSelection(props) {
   const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

   const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

   return (
      <div className='controller' style={{ padding: '50px', margin: '0px auto', maxWidth: '400px' }}>
         <button onClick={() => { props.onSelected(smallUrl) }} className="btn btn-primary m-1">Малый 32 эл</button>
         <button onClick={() => { props.onSelected(bigUrl) }} className="btn btn-success m-1">Большой 10000 эл</button>
      </div>
   )
}

export default ModeSelection