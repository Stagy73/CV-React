import data from '../assets/data.js';

function Nuages() {
    const nuages = data.filter(item => item.hasOwnProperty('nuage')).map(item => item.nuage).join(', ');

    return (
        <div className="Nuages nuages-text">
            {nuages}
        </div>
    );
}

export default Nuages;
