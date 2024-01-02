import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleAuth = () => {
    // Implement authentication logic here
    if (isLogin) {
      alert('You have logged in successfully');
      // Add login logic
    } else {
      alert('Your account has been created successfully');
      // Add signup logic
    }
  };

  return (
    <div className='wrapper'>
      <p>
       
      <h1>FARM FRESH</h1>
      <h3>Organic Veggies and Fruits</h3>
      </p>
      <center><h2>{isLogin ? 'Login' : 'Sign Up'}</h2></center>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" required />

        <label htmlFor="username">Email:</label>
        <input type="text" id="username" required />

        <label htmlFor="username">Phone:</label>
        <input type="text" id="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />

        {!isLogin && (
          <>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" required />
          </>
           )}

           <button type="button" onClick={handleAuth}>
             {isLogin ? 'Login' : 'Sign Up'}
           </button>
         </form>
   
         <div className="toggle-btn" onClick={toggleForm}>
           {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
         </div>
       </div>
     );
   };
   
   export default AuthPage;