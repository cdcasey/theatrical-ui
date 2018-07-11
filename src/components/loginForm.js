import React from 'react';

export default function LoginForm(props) {
    return (
        <div className="container">
            <div className="card card-login mx-auto mt-5">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form onSubmit={props.loginHandler} method="POST">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onChange={props.fieldHandler} className="form-control" id="exampleInputEmail1" name="email" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input onChange={props.fieldHandler} className="form-control" id="exampleInputPassword1" name="password" type="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">Remember Password</label>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                    </form>
                    <div className="text-center">
                        <a className="d-block small mt-3" onClick={props.register} href="#">Register an Account</a>
                        <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}