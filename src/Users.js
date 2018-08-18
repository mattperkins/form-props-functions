import * as React from 'react'

export default ({users}) => (
    users.map((users, id) => {
       return <div key={id}>
            <p>{users.name}</p> 
            <p>{users.age}</p> 
            <p>{users.city}</p> 
        </div>
    })
)
 