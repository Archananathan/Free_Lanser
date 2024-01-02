import React, { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleAuth = () => {
    if (isLogin) {
      alert('You have logged in successfully');
    } else {
      alert('Your account has been created successfully');
    }
  };

  return (
<body id="lo" >

    <div className='wrapper'>

      <form id="form">
      <center>
        <h2>
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        </center>

        <label htmlFor="username" id="lable">Username:</label>
        <input type="text" id="input" required></input>

        <label htmlFor="username" id="lable">Email:</label>
        <input type="text" id="input" required ></input>

        <label htmlFor="password" id="lable">Password:</label>
        <input type="password" id="input" required ></input>

        {!isLogin && (
          <>
            <label htmlFor="confirm-password" id="lable">Confirm Password:</label>
            <input type="password" id="input" required />
          </>
           )}
              <br/><br/>
              <center>

           <button type="button" id="button" onClick={handleAuth}>
             {isLogin ? 'Login' : 'Sign Up'}
           </button>
              </center>
            <br/><br/>
         <div className="toggle-btn" onClick={toggleForm}>
           {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
         </div>
         </form>
         <link to ="/Login"></link>
       </div>
     </body>
    );
   };
  export default Login;