import * as React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import styled, {injectGlobal} from 'styled-components'
import App from './App'

//eslint-disable-next-line
injectGlobal`
body {
font-family: sans-serif;
font-size: 24px;
background: #f7f7f7;
}
form{
  margin: 10px;
}
input{
  margin: 10px;
  display: block;
}
span{
  padding: 10px;
}
`

// styled components
const Wrapper = styled.div`
margin: 10px;
`


// main ("ROOT") component 
class Root extends React.Component {


// MAIN COMPONENT RENDER
render() {

// MAIN COMPONENT RETURN
return (

<Wrapper>

<App />

</Wrapper>

)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
