import React from "react";
export default function SignIn(){
    return(
        <div className="SignIn">
            <h1 className="SignInHeading">Sign in to your account</h1>
            <form>
                <input type="text" placeholder="Email address" name="Email" required/>
                <input type="password" placeholder="Password" name="password" required/>
                <button><a href="/">Sign in</a></button>
            </form>
            <p className="create-account">Don't have an account?<span id="signup">Create one now</span></p>
        </div>
    )
}