import data from '../assets/data.js';

function Nuages() {
    const nuages = data.filter(item => item.hasOwnProperty('nuage', 'project')).map(item => `${item.nuage} ${item.project}`).join(', ');

    return (
        <div className="Nuages nuages-text">
            {nuages}
        </div>
    );
}

export default Nuages;
