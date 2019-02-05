import React from 'react';

const Planet = ({ planet }) => {
    return (
        <div className="col s12 m3">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">
                        {planet.name}
                    </span>
                    <ul className="collection blue-text"></ul>
                </div>
                <div className="card-action">
                    <a href="#">
                        View more
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Planet;