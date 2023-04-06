import data from './data.js';



console.log(data)



// title of cv
const titleId = 'WEB DEVELOPPEUR & WEB MOBILE'; // set the id of the title you want to display

const titleData = data.find(title => title.title === titleId);

if (titleData) {
    const titleElement = document.createElement('div');
    const titleLi = document.createElement('li');
    titleElement.classList.add('title');
    titleLi.classList.add('titleLi');
    titleElement.textContent = titleData.title;
    const newTitle = `${titleData.title} titleText`;


    document.body.appendChild(titleElement);
} else {
    console.error(`Title with id ${titleId} not found`);
}
//////////////////////////////////////////////////////

// create a container div
const infoContainer = document.createElement('div');
infoContainer.classList.add('info-container');

// create elements for each piece of information
const nameDiv = document.createElement('div');
nameDiv.classList.add('name');
nameDiv.textContent = 'Nils Mehlhorn';

const addressDiv = document.createElement('div');
addressDiv.classList.add('address');
addressDiv.textContent = '1, Rue Amblard 26000 valence';

const phoneDiv = document.createElement('div');
phoneDiv.classList.add('phone');
phoneDiv.textContent = '06-19-65-09-78';

const englishDiv = document.createElement('div');
englishDiv.classList.add('english');
englishDiv.textContent = 'Anglais courant';

const permitDiv = document.createElement('div');
permitDiv.classList.add('permit');
permitDiv.textContent = 'permit B';

const vehicleDiv = document.createElement('div');
vehicleDiv.classList.add('vehicle');
vehicleDiv.textContent = ' véhiculé';

// append the elements to the container div
infoContainer.appendChild(nameDiv);
infoContainer.appendChild(addressDiv);
infoContainer.appendChild(phoneDiv);
infoContainer.appendChild(englishDiv);
infoContainer.appendChild(permitDiv);
infoContainer.appendChild(vehicleDiv);

// append the container div to the document body
document.body.appendChild(infoContainer);



///////////////////////////////////////////////////////

const competences = data.find(item => item.competences)?.competences;

if (competences) {
    const competencesDiv = document.createElement('div');
    competencesDiv.classList.add('competences');

    for (let i = 0; i < competences.length; i++) {
        const competenceButton = document.createElement('button');
        competenceButton.classList.add('competenceButton');
        competenceButton.textContent = competences[i];
        competencesDiv.appendChild(competenceButton);
    }

    document.body.appendChild(competencesDiv);
}


// nuage de mots
const nuages = data.filter(item => item.hasOwnProperty('nuage'));

if (nuages) {
    const nuagesDiv = document.createElement('div');
    nuagesDiv.classList.add('nuages');
    nuagesDiv.textContent = nuages.map(item => item.nuage).join(', ');
    document.body.appendChild(nuagesDiv);
}

const job = data.filter(item => item.hasOwnProperty('job'));

job.forEach(data => {
    const jobDiv = document.createElement('div');
    const jobList = document.createElement('ul');
    const jobItem = document.createElement('li');
    const dateUl = document.createElement('ul')
    const dateItem = document.createElement('li')
    jobItem.textContent = data.job
    dateItem.textContent = data.date + ' - ' + data.duties
    jobItem.classList.add('jobLi')
    dateUl.classList.add('dateUl')
    dateItem.classList.add('dateLi')
    jobDiv.classList.add('job');
    jobList.appendChild(jobItem);
    jobDiv.appendChild(jobList);
    jobDiv.appendChild(dateUl)
    jobDiv.appendChild(dateItem)
    document.body.appendChild(jobDiv);
})





