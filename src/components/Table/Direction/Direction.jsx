import arrowUp from './../../../assets/images/up-arrow.png'
import arrowDown from './../../../assets/images/down-arrow.png'
import './Direction.css'

function Direction(props) {
   return (
      <div className='arrow'>
         <img src={
            props.sort === 'asc'
               ? arrowDown
               : arrowUp
         } alt="arrowUp" />
      </div>
   )
}


export default Direction