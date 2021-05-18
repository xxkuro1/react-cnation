import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form action="http://127.0.0.1:8000/api/register" method="POST">
                <h3>Lets Create your account</h3>

               
                
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Name" 
                    required="required" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name ="email" placeholder="Enter email" 
                    required="required" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" 
                    required="required"/>
                </div>
                <div className="form-group">
                    <label>Re-type password</label>
                    <input type="password" className="form-control" name="c_password" placeholder="Re-type password" 
                    required="required"/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">log in?</a>
                </p>
            </form>
        );
    }
}