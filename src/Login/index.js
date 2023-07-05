import React,{useState} from "react";
import './style.css'

 const Login =()=>{
    const [Username,setUserName]=useState('');
    const[Password,setPassword]=useState('');
    console.log({Username});
    console.log({Password});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data={
            username:Username,
            password:Password
        }
        try {
            const response = await fetch ('https://dummyjson.com/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type ': 'application'
                },
                body :JSON.stringify(data)
            })
           const result= await response.json()
           console.log({result});
            
                
        }
        catch(error){
            console.log(error.message)
        }



    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1> Login</h1>
                <input placeholder="Enter Username" type="texst"
                onChange={(e)=>{setUserName(e.target.value)}}/>
                <br/>
                <br/>
                <input placeholder="Enter Password" type="password"
                onChange={(e)=>{setPassword(e.target.value)}}/>
                <br/>
                <br/>
                <button type="submit">Log in</button>
                

            </form>
        </div>
    )
 }
 export default Login;