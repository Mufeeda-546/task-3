import {useState}  from 'react'
import {useNavigate}  from 'react-router-dom'
import axios from 'axios'


function Login(){
const  [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const navigate=useNavigate()

const  handleLogin=async (e)=>{

    e.preventDefault();
    if(!email||!password){
        alert("All fields required")
        return;
    }
  try{ const result=await axios.get('http://localhost:3000/users')
   const getItem=result.data

   const check=
    getItem.find(
    (users)=>users.email===email && users.password===password
    )

   if (check){
    alert("login successful")
    navigate("/home")
   }else{
   alert("Something went wrong")
}}catch(error){console.error(error)}


   }



    return (
<div>
    <h1>Log In</h1>
    <form  onSubmit={handleLogin}>
        <div>
    <label  className="labels">Email</label><br/>
<input className="inputs" type="email" onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div>
<label className="labels">Password</label><br/>
<input className="inputs" type="password" onChange={(e)=>setPassword(e.target.value)}/></div>
<button type="submit">Login</button>
</form>
</div>

    )

}
export default  Login