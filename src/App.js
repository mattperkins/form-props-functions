import * as React from 'react'
import Users from './Users'
import AddUser from './AddUser'

export default class App extends React.Component{
  state={
   users: [
      {name: "Fred", age: 35, city: "LA"}, {name: "Sandy", age: 27, city: "Berlin"},
      {name: "Bob", age: 50, city: "NYC"}
  ]
   }

  addUser = (user) => {
    user.id = Math.random()
    let users = [...this.state.users, user]
    this.setState({
        users: users 
      })
  }

  render(){
   return(
    <div>
       <Users users={this.state.users}/>
       <AddUser addUser={this.addUser} />
     </div>
   )
  }
}