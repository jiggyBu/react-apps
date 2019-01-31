import React from 'react';

const Starship = ({ starship }) => {
    return (
        <div className="col s12 m3">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title truncate">
                        {starship.name}
                    </span>
                    <ul className="collection blue-text">
                        <li className="collection-item truncate">
                            Model: {starship.model}
                        </li>
                        <li className="collection-item truncate">
                            Manufacturer: {starship.manufacturer}
                        </li>
                        <li className="collection-item">
                            Crew number: {starship.crew}
                        </li>
                        <li className="collection-item">
                            MGLT: {starship.MGLT}
                        </li>
                    </ul>
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

export default Starship;