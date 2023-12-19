import {Link} from 'react-router-dom'
import { useState } from 'react'
import {auth} from './Config';
import { signInWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const navigate = useNavigate()

    async function handleSubmit(e)
    {
        e.preventDefault()
        try{ 
        const userCredentials = await signInWithEmailAndPassword(auth,email,password)
        const user = userCredentials.user
        console.log(user);
        alert("Login Successfully");
        navigate('/home')
        }
        catch (error)
        {
            console.log("error"+error);
        } 
    }
  return (
    <div >
        <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <input  value={email} onChange={(e)=>setEmail(e.target.value)} type="Emaill" placeholder='Enter your Email' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="Password" placeholder='Enter your Password'></input>
            <br />
            <button type="Submit">login</button>
            <br />
            <span>Already have account <Link to='/login'>Login</Link></span>

        </form>

    </div>
  )
}

export default Signup