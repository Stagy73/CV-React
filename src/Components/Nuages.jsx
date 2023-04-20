import { data } from '../assets/data.js';

function Nuages() {
  const formations = data.filter(item => item.hasOwnProperty('formation') && item.hasOwnProperty('project') && item.project);

  
  return (
    <div>
      <h1 className="titleFormation">Formation</h1>
      <div className="Nuages Nuages-text">
        <ul className="formation">
          {formations.map(item => (
            <li className="linuage" key={item.id}>
              {item.hasOwnProperty('project','formation') ?
                `${item.formation} - ${item.project}` :
                `${item.formation} `
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
  
}

export default Nuages;
