
const API = fetch('https://digi-api.com/api/v1/digimon/289');
const cardContainer = document.querySelector('.card');

const requestData = async () => {
    API.then(res => {
        if (!res.ok) {
            throw console.error('no connection made');
        }
        else {
            res.json().then(digimon => {
                createCard(digimon.id, digimon.name, digimon.images[0].href, digimon.levels[0].level, digimon.types[0].type);
            });
        }
    });
};

const createCard = (id, name, img, level, type) => {
    console.log('we are creating card   ');
    const digiInfoBottom = document.createElement('div');
    digiInfoBottom.classList.add('digi-info-bottom');
    const digiInfoTop = document.createElement('div');
    digiInfoTop.classList.add('digi-info-top');
    const digiId = document.createElement('h3');
    digiId.innerHTML = 'ID: ' + id;
    const digiName = document.createElement('h2');
    digiName.innerHTML = 'Name: ' + name;
    const digiImg = document.createElement('img');
    digiImg.setAttribute('src', img);
    const digilevel = document.createElement('p');
    digilevel.innerHTML = 'Level: ' + level;
    const digiType = document.createElement('h2');
    digiType.innerHTML = 'Type: ' + type;


    //Appending all containers in here
    cardContainer.appendChild(digiInfoTop);
    digiInfoTop.appendChild(digiId);
    digiInfoTop.appendChild(digiName);
    cardContainer.appendChild(digiImg);
    digiInfoBottom.appendChild(digilevel);
    digiInfoBottom.appendChild(digiType);
    cardContainer.appendChild(digiInfoBottom);
};

requestData();