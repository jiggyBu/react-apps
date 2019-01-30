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
                            Height: {people.height}
                        </li>
                        <li className="collection-item">
                            Mass: {people.mass}
                        </li>
                        <li className="collection-item">
                            Birth year: {people.birth_year}
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