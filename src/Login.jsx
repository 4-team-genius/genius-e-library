import { useState, useEffect } from "react";

const login = ({setUser})=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken]= useState(localStorage.getItem('token'));

  useEffect(() =>{
    const attemptToLoginWithToken = async()=>{
      const localStorageToken = localStorage.getItem('token');
      
      if(localStorageToken){
        const response = await fetch ('/api/v1/login', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorageToken
          }
        });
        
        const x = await response.json();
        console.log(x)
      }
    } 

    attemptToLoginWithToken();
  })

  const login = async(event)=>{
    event.preventDefault();
    try {
      const response = await fetch('/api/v1/login', {
        method: 'POST', 
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });
      const data= await response.json();
      setUser(data.user);
      alert('LOGIN SUCCESSFUL');
    }  catch(err) {
      alert('LOGIN FAILED');
    }
  };

  const logOut = ()=>{
    localStorage.removeItem('token');
    setToken('');
  }

  return(
    <>
    <h1>Genius-e-Library</h1>
    {
      token ? 
      <> 
      <h1>Welcome to Genius e-Library</h1>
      <button onClick={logOut}>LogOut</button>
      </>:
      <form onSubmit={login}>
      <input
      placeholder="email"
      onChange={(event)=>{setEmail(event.target.value)}}
      />
      <input
      placeholder="password"
      onChange={(event)=>{setPassword(event.target.value)}}
      type="password"
      />
      <button>LogIn</button>
      </form>                  
    }
    </>                     
  )
}

export default login