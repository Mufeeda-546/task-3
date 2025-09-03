import axios from 'axios'
import {useState }  from 'react'
import {useEffect} from 'react'
import {useNavigate}  from 'react-router-dom'

function Register(){
    const  [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

   const handleRegister=async (e)=>{e.preventDefault()
    if(!name||!email||!password){
        alert("All fields are required")
        return;
    }

    try{await axios.post("http://localhost:3000/users",{name,email,password})
    // .then((res)=>console.log(res.data))
    // .catch((err)=>console.error(err))


    alert("successful");
    navigate("/login")}
    catch(error){
        console.error(error)
        alert("something went wrong")
    }}
    return(
<div>

    <form onSubmit={handleRegister}>
<h1>Register Here</h1>
<div>
<label className="labels">NAME</label><br/>
<input  className="inputs" type="text"  placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
</div>

<div>
<label className="labels">Email</label><br/>
<input className="inputs" type="email"  placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>

<div>
<label className="labels">Password</label><br/>
<input className="inputs" type="password"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>

<button type="submit">Register</button>
</form>
</div>
)
}
export default Register