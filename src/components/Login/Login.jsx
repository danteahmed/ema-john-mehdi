import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const location = useLocation();
   let from = location.state?.from?.pathname || "/";

   const [signInWithEmailAndPassword, user, loading, error] =
     useSignInWithEmailAndPassword(auth);

   const handleEmailBlur = (event) => {
     setEmail(event.target.value);
   };

   const handlePasswordBlur = (event) => {
     setPassword(event.target.value);
   };

   if (user) {
     navigate(from, {replace: true});
   }

   const handleUserSignIn = event =>{
      event.preventDefault();
      signInWithEmailAndPassword(email, password);
   }
   return (
     <div className="form-container">
       <div>
         <h2 className="form-title">Login</h2>
         <form onSubmit={handleUserSignIn}>
           <div className="input-group">
             <label htmlFor="email">Email</label>
             <input
               onBlur={handleEmailBlur}
               type="email"
               name="email"
               required
             />
           </div>
           <div className="input-group">
             <label htmlFor="password">Password</label>
             <input
               onBlur={handlePasswordBlur}
               type="password"
               name=""
               required
             />
           </div>
           <p style={{ color: "red" }}>{error?.message}</p>
           {loading && <p>Loading...</p>}
           <input className="form-submit" type="submit" value="Login" />
         </form>
         <p>
           New to Ema-john?{" "}
           <Link className="form-link" to="/signup">
             Create an Account
           </Link>
         </p>
       </div>
     </div>
   );
};

export default Login;