import { data } from '../assets/data.js';

function Nuages() {
  const formations = data.filter(item => item.hasOwnProperty('formation') && item.hasOwnProperty('project'));
  
  return ( <div><h1 className="titleFormation">Formation</h1>
    <div className="Nuages nuages-text">
      
      <ul className ="formation">
        {formations.map(item => (
          <li  className ="linuage"key={item.id}>{`${item.formation} ${item.project}`}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Nuages;
