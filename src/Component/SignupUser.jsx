import { useState, useEffect} from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { provider } from '../Firebase_Config'

const SignupUser = () => {
    const auth = getAuth()
    const [user, setUser] = useState({
      email : "",
      password: ""
    })
    const [state, setState] = useState(false)
    const [loggedUser, setLoggedUser] = useState()
  
    useEffect(() => {
      setLoggedUser(localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : [])
    }, [state])
  
  
    const submitForm = (e) => {
      const { email, password} = user
      e.preventDefault()
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCrediantial) => {
        localStorage.setItem("user", JSON.stringify(userCrediantial.user.email))
        setState(!state)
        setUser({...user, email : "", password : ""})
      }).catch((error) => console.log(error))
    }
  
    return (
      <div className="form">
        <h3>Firebase Authentication</h3>
        <form onSubmit={submitForm}>
          <label htmlFor="email"></label>
          <input value={user.email} type="email" onChange={(e) => setUser({...user, email : e.target.value})}  placeholder="Enter email address" id="email"/>
          <label htmlFor="password"></label>
          <input value={user.password} type="password" onChange={(e) => setUser({...user, password : e.target.value})} placeholder="Enter password" id="password"/>
          <button type="submit">Submit form</button>
        </form>
        <div className="userName">
          Logged User is : <span className="user">{ loggedUser ?? loggedUser}</span>
        </div>
      </div>
    )
}

export default SignupUser
