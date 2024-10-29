// import Counter from "./Components/Counter"
// import Form from "./Components/Form"
// import Header from "./Components/Header"
// import Banner from "./Components/Banner"
// import Posts from "./Components/Posts"

import Child1 from "./Components/Child1"
import Child2 from "./Components/Child2"
import StyledDiv from "./Components/StyledDiv"
import WelcomeMessage from "./Components/WelcomeMessage"
import WelcomePage from "./Components/WelcomePage"

function App() {

  return (
    <>
    {/* <Header/> */}
    {/* <Counter/> */}
    {/* <Form/> */}
    {/* <Posts/> */}
    {/* <Banner/> */}
    {/* <StyledDiv>
      <Child1/>
      <Child2/>
    </StyledDiv> */}
    {/* <WelcomePage user="Erfan Forouzi"/> */}

    <WelcomePage>
      <WelcomeMessage user="Erfan Forouzi"/>
    </WelcomePage>
    </>
  )
}

export default App
