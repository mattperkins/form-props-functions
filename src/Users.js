import * as React from 'react'

export default ({users}) => (
    users.map((users, id) => {
       return <div key={id}>
            <span>{users.name}</span> 
            <span>{users.age}</span> 
            <span>{users.city}</span>
        </div>
    })
)
 