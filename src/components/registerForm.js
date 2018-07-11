import React from 'react';

export default function RegisterForm(props) {
    return (
        <div className="container">
            <div className="card card-register mx-auto mt-5">
                <div className="card-header">Register an Account</div>
                <div className="card-body">
                    <form onSubmit={props.registrationHandler}>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputName">First name</label>
                                    <input onChange={props.fieldHandler} name="first_name" className="form-control" id="exampleInputName" type="text" aria-describedby="nameHelp" placeholder="Enter first name" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputLastName">Last name</label>
                                    <input onChange={props.fieldHandler} name="last_name" className="form-control" id="exampleInputLastName" type="text" aria-describedby="nameHelp" placeholder="Enter last name" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onChange={props.fieldHandler} name="email" className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input onChange={props.fieldHandler} name="password" className="form-control" id="exampleInputPassword1" type="password" placeholder="Password" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="exampleConfirmPassword">Confirm password</label>
                                    <input name="password2" className="form-control" id="exampleConfirmPassword" type="password" placeholder="Confirm password" />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block" type="submit">Register</button>
                    </form>
                    <div className="text-center">
                        <a className="d-block small mt-3" onClick={props.login} href="#">Login Page</a>
                        <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}