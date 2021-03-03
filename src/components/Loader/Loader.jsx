import './Loader.css'
import loader from './../../assets/images/loading.gif'

function Loader() {
   return (
      <div className='loader__container'>
         <img src={loader} alt="" />
      </div>
   )
}

export default Loader