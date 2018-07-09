import React from 'react';

export default class Content extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    {/*<!-- Breadcrumbs-->*/}
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Blank Page</li>
                    </ol>
                    <div className="row">
                        <div className="col-12">
                            <h1>Blank</h1>
                            <p>This is an example of a blank page that you can use as a starting point for creating new ones.</p>
                        </div>
                    </div>
                </div>
                {/*<!-- /.container-fluid-->*/}
                {/*<!-- /.content-wrapper-->*/}
                <footer className="sticky-footer">
                    <div className="container">
                        <div className="text-center">
                            <small>Copyright © Your Website 2018</small>
                        </div>
                    </div>
                </footer>
                {/*<!-- Scroll to Top Button-->*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fa fa-angle-up"></i>
                </a>
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
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    };
}