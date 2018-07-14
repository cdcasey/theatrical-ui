import React from 'react';

export default function CastList(props) {
    return props.cast.map((castMember) => {
        return (
            <React.Fragment key={castMember.character}>
                <a onClick={props.selectProduction} className="dropdown-item" href="#">
                    {castMember.first_name} {castMember.last_name} - <strong>{castMember.character}</strong>
                </a>
                <div className="dropdown-divider"></div>
            </React.Fragment>
        )
    })
}