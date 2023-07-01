import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

    const [show, setshow] = useState(false);

    const {signIn}=  useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';



    const handlelogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //  const confirm = form.confirm.value;

        console.log(email,password);

        signIn(email,password)
        .then(result => {
            const loggeduser = result.user;
            console.log(loggeduser);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handlelogin}>
             <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
             </div>

             <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type={show? "text" :"password"} name="password" id="" required/>
                <p onClick={() => setshow(!show)}><small>
                    {
                        show ? <span>Hide password</span>: <span>Show password</span>
                    }
                    </small></p>
             </div>
             {/* <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="" required/>
             </div> */}

             <input className='btn-submit' type="submit" value="Login" />

            </form>
            <p className='newto-ema'><small>New to Ema-john?  <Link className='text-clr' to="/signup">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;