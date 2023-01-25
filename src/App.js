import React from "react"
import "../src/App.css"
import LoginUser from "./Component/LoginUser"
import SignupUser from "./Component/SignupUser"

const App = () => {
  return (
    <div className="APP">
      <SignupUser/>
      <LoginUser/>
    </div>
  )
}

export default App