import React, { useState } from 'react';

const Register = () => {
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle login logic here
    //     console.log('Name:', name);
    //     console.log('Password:', password);
    // };

    return (
        <main class="main-wrapper main-wrapper3">

        {/* register-area start  */}
        <section class="register-area">
            <div class="container">
                <div class="register-item">
                    <form action="#">
                        <div class="register-item-inner">
                            <h2>פתח חשבון</h2>
                            <img src="images/register-01.png" alt=""/>
                        </div>
                        <div class="register-item-inner2">
                            <div class="register-item-inner3">
                                <div class="register-item-inner4">
                                    <input type="email" name="" placeholder="E-mail" required/>
                                    <img src="images/register-02.png" alt=""/>
                                </div>
                            </div>
                            <div class="register-item-inner3">
                                <div class="register-item-inner4">
                                    <input type="text" name="" placeholder="Login" required/>
                                    <img src="images/register-02.png" alt=""/>
                                </div>
                            </div>
                            <div class="register-item-inner3">
                                <div class="register-item-inner4">
                                    <input type="password" name="" placeholder="Password" required/>
                                    <img src="images/register-02.png" alt=""/>
                                </div>
                            </div>
                            <div class="register-item-inner3">
                                <div class="register-item-inner4">
                                    <input type="password" name="" placeholder="Confirm password" required/>
                                    <img src="images/register-02.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="register-item-inner5">
                            <input type="checkbox" id="test" checked/>
                            <label for="test"><span><img src="images/register-03.png" alt=""/></span>I agree with the Terms of Service and Privacy Policy</label>
                        </div>
                        <div class="register-item-inner6">
                            <button type="submit">פתח חשבון</button>
                        </div>
                    </form>
                </div> 
            </div>
        </section>
        {/* register-area end */}

    </main>
    ); 
};

export default Register;