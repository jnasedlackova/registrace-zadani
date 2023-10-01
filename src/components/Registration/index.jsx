import React, { useEffect } from "react";
import { useState } from "react";
import './style.css';

const Registration = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
     });
     const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}))
      }
     useEffect( ()=> {
        const email = user.email;
        const name = (email.includes("@") && user.username === '')
        ? email.substring(0,email.indexOf('@')) : user.username;
        setUser({...user, username : name})
     }, [user.email]);

     const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
     };

    return (       
            <form className="form" onSubmit={handleSubmit}>
            <label className="label">Email Address:
                <input className="input" type="text" name="email" value={user.email} onChange={handleChange} />
            </label>
            <label className="label">User Name:
                <input className="input" type="text" name="username" value={user.username} onChange={handleChange} />
            </label>
            <label className="label">Password:
                <input className="input" type="text "name="password" value={user.password} onChange={handleChange} />
            </label>
            <label className="label">Confirm Password:
                <input className="input" type="text" name="passwordConfirm" value={user.passwordConfirm} onChange={handleChange} />
            </label>
            <input className="button" type="submit" value="Register" />
    
        </form>
       
        
    )
}

export default Registration;