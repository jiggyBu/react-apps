import React from 'react';

const People = ({ people }) => {
    return (
        <div className="col s12 m3">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">
                        {people.name}
                    </span>
                    <ul className="collection blue-text">
                        <li className="collection-item">
                            Eye color: {people.eyeColor}
                        </li>
                        <li className="collection-item">
                            Hair color: {people.hairColor}
                        </li>
                        <li className="collection-item">
                            Gender: {people.gender}
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

export default People;