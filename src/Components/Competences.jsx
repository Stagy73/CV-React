import React from 'react';
import data from '../assets/data.js';

function Competences() {
    const competences = data.find(item => item.competences)?.competences;

    if (competences) {
        const competenceButtons = competences.map((competence, index) => (
            <button key={index} className="competenceButton">
                {competence}
            </button>
        ));

        return (
            <div className="competences">
                {competenceButtons}
            </div>
        );
    } else {
        return null;
    }
}

export default Competences;
