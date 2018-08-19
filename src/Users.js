import * as React from 'react'

export default ({users, deleteUser}) => (
    users.map(user => {
      return user.age > 16 ? (
        <div key={user.id}>
         <p onClick={ () => deleteUser(user.id) }>
            <span>{user.name}</span> 
            <span>{user.age}</span> 
            <span>{user.city}</span>
          </p>
        </div> 
        ) : null
        }
    )
)
 