import React from 'react';
import { FaReact } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';





function Details() {
    return (<div className="bigContainer">
        
        <div className="info-container">
            <div className="name" >Nils Mehlhorn</div>
            <div className="address">1, Rue Amblard 26000 valence</div>
            <div className="english">Anglais courant</div>
            <div className="permit">permit B</div>
            <div className="vehicle">véhiculé</div>
            <a href="tel:0619650978">
            <div className="phone">06-19-65-09-78</div></a>
                <div className="email">nils.mehlhorn.fr@gmail.com </div>
                <div><a href="https://github.com/Stagy73"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""  width ="50px" height ="50px"/></a></div>
                <div><a href="https://www.linkedin.com/in/nils-mehlhorn-51152823b/"><img src="https://www.1min30.com/wp-content/uploads/2017/08/LinkedIn-logo.jpg" alt=""  width ="50px" height ="50px"/></a></div>
                
            
            <div className ="animation">
            <div className="icone">
                <img className="img4" src="/js-file.png" alt="React icon" width="90px" height="90px" />
                <img className="img4" src="/atom.png" alt="JavaScript icon" width="90px" height="90px" />
                <img className="img4" src="/html-5.png" alt="JavaScript icon" width="90px" height="90px" />
                <img className="img4" src="/css.png" alt="JavaScript icon" width="90px" height="90px" />
                <img className="img4" src="/node-js.png" alt="JavaScript icon" width="90px" height="90px" />
</div>
            </div>
            </div>

        </div >
    );
}
export default Details;
