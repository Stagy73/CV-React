import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from '../assets/data.js';
/* import Nuages from './Nuages'; // add import statement for Nuages component */
import 'hover.css/css/hover-min.css';




function Competences({ filterKeyword }) {
    const competences = data.find((item) => item.competences)?.competences;
    const [selectedCompetence, setSelectedCompetence] = useState(null);

    if (competences) {
        const filteredCompetences = competences.filter((competence) => {
            const id = competence.id;
            if (filterKeyword === 'gestion-de-projet') {
                return id >= 100 && id <= 105;
            } else if (filterKeyword === 'other-keyword') {
                return id >= 106 && id <= 110;
            }
            // add more conditions for other keywords if needed
            return true; // return all competences if no keyword is specified
        });

        const competenceButtons = filteredCompetences.map((competence) => {
            const uniqueClassName = `competence-${uuidv4()}`;
            const isButtonSelected = selectedCompetence === competence.id;

            return (
                <button
                    disabled={true}
                    key={competence.id}
                    className={`competenceButton ${uniqueClassName} ${isButtonSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedCompetence(competence.id)}
                >
                    {competence}
                </button>
            );
        });

        return (
            <div><h1 className='CompTitle "hvr-bounce-in"'>Compétences</h1>
                <div className="competences">{competenceButtons}</div>

                {selectedCompetence && (
                    <div className="nuages">
                        <Nuages competenceId={selectedCompetence} />
                    </div>
                )}
            </div>
        );
    } else {
        return null;
    }
}

export default Competences;
