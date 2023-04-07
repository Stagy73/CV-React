import React from 'react';
import { FaReact } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';



function Details() {
    return (
        <div className="info-container">
            <div className="name">Nils Mehlhorn</div>
            <div className="address">1, Rue Amblard 26000 valence</div>
            <div className="english">Anglais courant</div>
            <div className="permit">permit B</div>
            <div className="vehicle">véhiculé</div>
            <div className="phone">06-19-65-09-78 </div>
            <div className='icone'><FaReact /><i className="fas fa-user"></i>

            </div>
        </div>
    );
}

export default Details;
