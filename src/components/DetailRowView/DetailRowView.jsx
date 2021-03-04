function DetailRowView({ person }) {
   return (
      <div style={{ border: '1px solid black', padding: '10px' }}>
         <p>
            Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b>
         </p>
         <p>
            Описание:<br />
            <b> {person.description}</b>
         </p>
         <p>
            Город: <b>{person.address.city}</b>
         </p>

      </div >
   )
}

export default DetailRowView