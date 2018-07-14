import React from 'react';
import axios from 'axios';

export default class Nav extends React.Component {

    logoutHandler() {
        document.cookie = 'id=null';
    }

    listProductions() {
        return this.props.productions.map((production) => {
            return (
                <React.Fragment key={production.id}>
                    <a onClick={this.props.selectProduction} className="dropdown-item" href="#">
                        <strong id={production.id}>{production.name}</strong>
                    </a>
                    <div className="dropdown-divider"></div>
                </React.Fragment>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <a className="navbar-brand" href="index.html">{this.props.user.first_name} {this.props.user.last_name}</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                                <a className="nav-link" href="index.html">
                                    <i className="fa fa-fw fa-dashboard"></i>
                                    <span className="nav-link-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                                <a className="nav-link" href="charts.html">
                                    <i className="fa fa-fw fa-area-chart"></i>
                                    <span className="nav-link-text">Charts</span>
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                                <a className="nav-link" href="tables.html">
                                    <i className="fa fa-fw fa-table"></i>
                                    <span className="nav-link-text">Tables</span>
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
                                    <i className="fa fa-fw fa-wrench"></i>
                                    <span className="nav-link-text">Components</span>
                                </a>
                                <ul className="sidenav-second-level collapse" id="collapseComponents">
                                    <li>
                                        <a href="navbar.html">Navbar</a>
                                    </li>
                                    <li>
                                        <a href="cards.html">Cards</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion">
                                    <i className="fa fa-fw fa-file"></i>
                                    <span className="nav-link-text">Example Pages</span>
                                </a>
                                <ul className="sidenav-second-level collapse" id="collapseExamplePages">
                                    <li>
                                        <a href="login.html">Login Page</a>
                                    </li>
                                    <li>
                                        <a href="register.html">Registration Page</a>
                                    </li>
                                    <li>
                                        <a href="forgot-password.html">Forgot Password Page</a>
                                    </li>
                                    <li>
                                        <a href="blank.html">Blank Page</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
                                    <i className="fa fa-fw fa-sitemap"></i>
                                    <span className="nav-link-text">Menu Levels</span>
                                </a>
                                <ul className="sidenav-second-level collapse" id="collapseMulti">
                                    <li>
                                        <a href="#">Second Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Second Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Second Level Item</a>
                                    </li>
                                    <li>
                                        <a className="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2">Third Level</a>
                                        <ul className="sidenav-third-level collapse" id="collapseMulti2">
                                            <li>
                                                <a href="#">Third Level Item</a>
                                            </li>
                                            <li>
                                                <a href="#">Third Level Item</a>
                                            </li>
                                            <li>
                                                <a href="#">Third Level Item</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-fw fa-link"></i>
                                    <span className="nav-link-text">Link</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav sidenav-toggler">
                            <li className="nav-item">
                                <a className="nav-link text-center" id="sidenavToggler">
                                    <i className="fa fa-fw fa-angle-left"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="d-lg">Productions</span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">Available Productions:</h6>
                                    <div className="dropdown-divider"></div>
                                    {this.listProductions()}

                                    <a className="dropdown-item" href="#">
                                        <strong>David Miller</strong>
                                        <span className="small float-right text-muted">11:21 AM</span>
                                        <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                                    </a>
                                    <div className="dropdown-divider"></div>

                                    <a className="dropdown-item small" href="#">View all messages</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="Search for..." />
                                        <span className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                                    <i className="fa fa-fw fa-sign-out"></i>Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/*<!-- Logout Modal-->*/}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" onClick={this.logoutHandler.bind(this)} href="/">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}