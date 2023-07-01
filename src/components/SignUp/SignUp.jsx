import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const SignUp = () => {

    const [error, setError] = useState('');
    const {creatrUser} = useContext(AuthContext);


   const handleSignup = event =>{
    event.preventDefault();

    const form =event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email,password,confirm)
     

    setError('');
    if(password !== confirm){
    
    setError('your password did not match')
    return
    
   }
   else if (password.length <6){
    setError('*** password must be 6 characters or longer')
    return
   }
   creatrUser(email,password)
   .then(result =>{
    const loggeduser = result.user;
    console.log(loggeduser);
   })
   .catch(error => {
    console.log(error);
    setError(error.message);
   })
   }


    return (
        <div className='form-container'>
            <h3 className='form-title'>Sign up</h3>
            <form onSubmit={handleSignup}>
             <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
             </div>

             <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
             </div>
             <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="" required/>
             </div>

             <input className='btn-submit' type="submit" value="Signup" />


            </form>
            <p className='newto-ema'><small>Already have an account? <Link className='text-clr' to="/login">Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};


export default SignUp;