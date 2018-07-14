import React from 'react';

export default function ProductionList(props) {
    return props.productions.map((production) => {
        return (
            <React.Fragment key={production.id}>
                <a onClick={props.selectProduction} className="dropdown-item" href="#">
                    <strong id={production.id}>{production.name}</strong>
                </a>
                <div className="dropdown-divider"></div>
            </React.Fragment>
        )
    })
}