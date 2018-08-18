import * as React from 'react'

export default ({users, deleteUser}) => (
    users.map(users => {
     if(users.age >= 16) { 
       return <div key={users.id}>
         <p onClick={ () => deleteUser(users.id) }>
            <span>{users.name}</span> 
            <span>{users.age}</span> 
            <span>{users.city}</span>
          </p>
        </div> 
        } else {
         return null
        }
    })
)
 