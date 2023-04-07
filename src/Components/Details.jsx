import React from 'react';
import { FaReact } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';





function Details() {
    return (
        <div className="info-container">
            <div className="name" >Nils Mehlhorn</div>
            <div className="address">1, Rue Amblard 26000 valence</div>
            <div className="english">Anglais courant</div>
            <div className="permit">permit B</div>
            <div className="vehicle">véhiculé</div>
            <div className="phone">06-19-65-09-78 </div>
            <div className="email">nils.mehlhorn.fr@gmail.com </div>
            <div className="icone">
                <img src="src/assets/js-file.png" alt="React icon" width="90px" height="90px" />
                <img src="src/assets/atom.png" alt="JavaScript icon" width="90px" height="90px" />
                <img src="src/assets/html-5.png" alt="JavaScript icon" width="90px" height="90px" />
                <img src="src/assets/css.png" alt="JavaScript icon" width="90px" height="90px" />
                <img src="src/assets/node-js.png" alt="JavaScript icon" width="90px" height="90px" />

            </div>

        </div >
    );
}
export default Details;
