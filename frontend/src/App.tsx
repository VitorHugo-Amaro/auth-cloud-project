import React, { useState } from "react";
import axios from "axios";

function App(){

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [message,setMenssage]=useState('');

  const handleLogin= async(e:React.FormEvent)=>{
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:3000/login',{
          email,
          password,
        });
        const token = response.data.token;
        localStorage.setItem('token',token);
        setMenssage('Login realizado com sucesso');
    }catch(error){
      setMenssage('Credenciais invalidas');
    }
  };
    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Auth Cloud 🚀</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <input 
          type="email" 
          placeholder="vitor@estudante.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Sua senha (123456)" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Entrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;