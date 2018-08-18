import * as React from 'react'
import Users from './Users'
import AddUser from './AddUser'

export default class App extends React.Component{
  state={
   users: [
      {name: "Fred", age: 35, city: "LA", id: 1}, 
      {name: "Sandy", age: 27, city: "Berlin", id: 2},
      {name: "Bob", age: 50, city: "NYC", id: 3}
  ]
   }

  addUser = (user) => {
    user.id = Math.random()
    let users = [...this.state.users, user]
    this.setState({
        users: users 
      })
  }

  deleteUser = (id) => {
   let users = this.state.users.filter(user => {
    return user.id !== id
   })
   this.setState({
    users: users
   })
  }

  render(){
   return(
    <div>
       <AddUser 
         addUser={this.addUser} />
       <Users 
         users={this.state.users}
         deleteUser={this.deleteUser}
       />
     </div>
   )
  }
}