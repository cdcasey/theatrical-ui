import React from 'react';
import axios from 'axios';

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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

    listCast() {
        console.log(this.props)
        return this.props.cast.map((castMember) => {
            return (
                <React.Fragment key={castMember.character}>
                    <a onClick={this.props.selectProduction} className="dropdown-item" href="#">
                        {castMember.first_name} {castMember.last_name} - <strong>{castMember.character}</strong>
                    </a>
                    <div className="dropdown-divider"></div>
                </React.Fragment>
            )
        })
    }

    render() {
        let content = null;
        if (this.props.selectedProduction.id) {
            console.log('production selected');
            content = this.listCast();
        } else {
            content = this.listProductions();
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
                            <h1>Welcome!</h1>
                            <p>Please select from one of the following:</p>
                            {/* <ul> */}
                            {content}
                            {/* </ul> */}
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