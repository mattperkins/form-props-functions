import * as React from 'react'

export default class AddUsers extends React.Component{
 
    state={
        name: null,
        age: null,
        city: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUser(this.state)
    }
    render() {
    return (
    <div>
    <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={this.handleChange}/>
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" onChange={this.handleChange}/>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" onChange={this.handleChange}/>
        <button>Submit</button>
    </form>
</div>
)
}
}