import React, { useState } from 'react';
import './signup.css';
import { registerWithEmailAndPassword } from '../firebase';
  
function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const signUpUser = (name, email, password) => {
        window.location = '/dashboard';
        registerWithEmailAndPassword(name, email, password);
    }

return (
    <div>
        <header id="header" class="header fixed-top" data-scrollto-offset="0">
            <div class="container-fluid d-flex align-items-center justify-content-between">

            <a href="/" class="logo d-flex align-items-center scrollto me-auto me-lg-0">
                <img src="./logo.png" class="logo" alt=""></img>
            </a>

            </div>
        </header>
        
        <section id="contact" class="contact">
        <div class="container">

            <div class="section-header">
            <h2>Sign Up</h2>
            <p>Welcome to Fit Factory!</p>
            <p>If you already have an account, please sign in <a href="/sign-in">here</a>.</p>
            </div>

        </div>
        <div class="container center">

            <div class="col-lg-8">
                <div class="php-email-form">
                <div class="form-group mt-3">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div class="form-group mt-3">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control" name="password" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                </div>
                <div class="text-center"><button onClick={() => signUpUser(name, email, password)}>Sign Up</button></div>
                </div>
            </div>

        </div>
        </section>
    </div>
);
}
  
export default SignUp;