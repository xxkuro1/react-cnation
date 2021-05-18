import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form action = "http://127.0.0.1:8000/api/login" method="POST">

                <h3>BANTAY BATA 163 DONATION</h3>

                <div className="form-group">
                   {/* <label>Email</label> */}
                    <input type="email" className="form-control" placeholder="Email Address" name="email"
                    required="required" />
                </div>
                    
                <div className="form-group">
                   {/* <label>Password</label> */}
                    <input type="password" className="form-control" placeholder="Password" 
                   name="password" required="required" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Log in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/forget">password?</a>
                </p>
            </form>
        );
    }
}
