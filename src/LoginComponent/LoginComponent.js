import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Name:', name);
        console.log('Password:', password);
    };

    return (
      <div className="main-wrapper main-wrapper3">
            <div className="register-area">
                <div className="container">
                    <div className="register-item register-item2">
                        <form onSubmit={handleSubmit}>
                            <div className="register-item-inner">
                                <h2>קחשמל סנכיהל  <img src="images/register-01.png" alt=""/></h2>                                
                            </div>
                            <div className="register-item-inner7">
                                <div className="register-item-inner4">
                                    <input type="text"
                                      id="name"
                                      placeholder="Enter your userName"
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}/>
                                    <img src="images/register-02.png" alt=""/>
                                </div>
                                <div className="register-item-inner4">
                                    <input type="password"
                                      className="form-control"
                                      id="password"
                                      placeholder="Enter your password"
                                      value={password}
                                      onChange={(e) => setPassword(e.target.value)}/>
                                    <img src="images/register-02.png" alt=""/>
                                </div>
                            </div>
                            <div className="register-item-inner8">
                                <a href="#">Forgot your password?</a>
                            </div>
                            <div className="register-item-inner6">
                                <button type="submit">הלחתה</button>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    ); 
};

export default Login;