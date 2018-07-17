import React from 'react';

export default class CastList extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(event) {
        event.preventDefault();
        const actualTarget = event.target.tagName === 'A' ? event.target : event.target.parentElement;
        actualTarget.nextSibling.classList.toggle('d-none');
    }
    render() {
        return this.props.cast.map((castMember) => {
            return (
                <React.Fragment key={castMember.character}>
                    <a onClick={this.handleClick.bind(this)} className="dropdown-item" href="#">
                        {castMember.first_name} {castMember.last_name} - <strong>{castMember.character}</strong>
                    </a>
                    <div className="cast-info d-none">
                        {castMember.email}
                        <br />
                        {castMember.phone}
                    </div>
                    <div className="dropdown-divider"></div>
                </React.Fragment >
            )
        })
    }
}