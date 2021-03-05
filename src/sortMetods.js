const sortMetods = {
   orderBy  (array, field, direction)  {
      let clonedArray = JSON.parse(JSON.stringify(array))
      
        if(direction === 'asc') {
          return clonedArray.sort((a,b) => a[field] > b[field] ? 1 : -1)
        } else if (direction === 'desc') {
          return clonedArray.sort((a,b) => a[field] > b[field] ? -1 : 1)
        } else {console.log('error')}    
    },

    chunk (array, size=1) {
      let subarray = []
    
      for(let i = 0; i < Math.ceil(array.length / size); i++) {
        subarray[i] = array.slice((i*size), (i*size + size))
      }
        return subarray
     }
}

export default sortMetods