import React from 'react';
import axios from 'axios';

import CastList from './castList';
import ProductionList from './productionList';
import Calendar from './calendar';

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let content = null;
        if (this.props.mode === 'cast') {
            content = <CastList cast={this.props.cast} />;
        } else if (this.props.mode === 'info') {
            content = <p>here is some info</p>
        }
        else if (this.props.mode === 'schedule') {
            content = <Calendar />
        }
        else if (this.props.selectedProduction.id) {
            content = (
                <React.Fragment>
                    {/* <h1>Welcome!</h1> */}
                    <p>You may now manage your production</p>
                </React.Fragment>
            );
        }
        else {
            content = (
                <React.Fragment>
                    <h1>Welcome!</h1>
                    <p>Please select from one of the following:</p>
                    <ProductionList productions={this.props.productions} selectProduction={this.props.selectProduction} />
                </React.Fragment>
            );
        }
        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    {/*<!-- Breadcrumbs-->*/}
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">{this.props.selectedProduction.name}</li>
                    </ol>
                    <div className="row">
                        <div className="col-12">
                            {content}
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
            </div >
        )
    };
}