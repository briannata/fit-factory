import React, { useState } from 'react';
import './signin.css';
import {logInWithEmailAndPassword} from '../firebase';
  
function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async (email, password) => {
        const uid = await logInWithEmailAndPassword(email, password);
        window.location = '/dashboard/' + uid;
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
            <h2>Sign In</h2>
            <p>If you don't already have an account, please sign up <a href="/sign-up">here</a>.</p>
            </div>

        </div>
        <div class="container center">

            <div class="col-lg-8">
                <form method="post" role="form" class="php-email-form">
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
                <div class="text-center"><button onClick="{() => logInWithEmailAndPassword(email, password)}">Sign In</button></div>
                </form>
            </div>

        </div>
        </section>
    </div>
);
}
  
export default SignIn;