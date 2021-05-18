import React, {Component} from 'react';


    export default class Forget extends Component{
        render(){
            return(
                <form action="http://127.0.0.1:8000/api/password/email" method = "POST">
                        <h3>Let's find your account</h3>
                    
                    <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email Addresss" 
                   name="email" required="required" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Reset Password</button>
                <p className="forgot-password text-right">
                 <a href="'/"></a>
                </p>
                </form>
            );
        }

    }