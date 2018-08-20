import * as React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './style.css'
import App from './App'



// main ("ROOT") component 
class Root extends React.Component {


// MAIN COMPONENT RENDER
render() {

// MAIN COMPONENT RETURN
return (

<React.Fragment>
  <App />
</React.Fragment>

)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
