import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState} from 'react'
import { auth } from '../Firebase_Config'

const LoginUser = () => {
    const [currentUser , setCurrentUser] = useState("")

    const [user, setUser] = useState({
        email : "",
        password: ""
      })

    const loginForm = (e) => {
        const { email, password} = user
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setCurrentUser(res.user.email)
        }).catch((err) => console.log(err.message))
      }

  return (
    <div className="form">
    <h3>Sign in User</h3>
    <form onSubmit={loginForm}>
      <label htmlFor="email"></label>
      <input value={user.email} type="email" onChange={(e) => setUser({...user, email : e.target.value})}  placeholder="Enter email address" id="email"/>
      <label htmlFor="password"></label>
      <input value={user.password} type="password" onChange={(e) => setUser({...user, password : e.target.value})} placeholder="Enter password" id="password"/>
      <button type="submit">Submit form</button>
    </form>
    <div className="userName">
       signedIn to :  <span className='user'>{ currentUser ?? currentUser}</span>
    </div>
  </div>
  )
}

export default LoginUser
