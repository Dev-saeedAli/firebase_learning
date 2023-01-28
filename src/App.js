import React from "react"
import "../src/App.css"
import LoginUser from "./Component/LoginUser"
import SignupUser from "./Component/SignupUser"
import TodoApp from "./Component/TodoApp"

const App = () => {
  return (
    <div className="APP">
      {/* <SignupUser/>
      <LoginUser/> */}
      <TodoApp/>
    </div>
  )
}

export default App