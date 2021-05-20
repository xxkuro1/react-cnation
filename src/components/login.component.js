import React, { Component } from "react";
import {Redirect} from 'react-router-dom';

export default class Login extends React.Component {

            constructor(props){
                super(props);

                this.state={
                    email:'',
                    password:'',
                    loggedIn:false,
                };

                    this.handleChange=this.handleChange.bind(this);
                    this.submit=this.submit.bind(this);
            }

                handleChange(event){
                    let name=event.target.name;
                    let value=event.target.value;
                    console.log(name,value);    
                    let data = {};
                    data[name]=value;

                    this.setState(data);
                }

    render() {

            if(this.state.loggedIn){
                return <Redirect to='/' />
            }
        return (
            <form onSubmit={this.submit} >

                <h3>FOODPAPA</h3>

                <div className="form-group">
                    <input type="email" className="form-control" value={this.state.email} 
                    placeholder="Email Address" name="email"
                     onChange={this.handleChange} required="required" />
                </div>
                    
                <div className="form-group">
                    <input type="password" className="form-control" 
                    value={this.state.password} placeholder="Password" 
                   name="password" onChange={this.handleChange} required="required" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" value="Submit" className="btn btn-dark btn-lg btn-block">Log in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/forget">password?</a>
                </p>
            </form>
        );
    }
        submit(e){
            this.setState({loggedIn:true})
            e.preventDefault();
              {/** HTPP POST*/}  
            window.axios.post('http://127.0.0.1:8000/api/login', {email:this.state.email,password:this.state.password})
            .then(response=>{
            console.log('response');
                {/** HTPP GET */}
            window.axios.get('http://127.0.0.1:8000/api/login')
           .then(resp=> {
               console.log('resp');
            //const email = response.data;
            //const password = response.data;
            //this.setState({email, password});
            })

                this.setState({loggedIn:true});

                localStorage.setItem('token', response.data.auth.access_token)
            });
        }

}
