
const API = 'https://digi-api.com/api/v1/digimon/';
const cardContainer = document.querySelector('.cards-container');

const requestData = async (id) => {
    //console.log(id);
    const search = await API + id;
    const values = await fetch(search).then(res => {
        console.log(search);
        if (!res.ok) {
            throw console.error('no connection made');
        }
        else {
            return res.json().then(digimon => {
                return [digimon.id, digimon.name, digimon.images[0].href, digimon.levels[0].level, digimon.types[0].type];

            });
        }
    });

    createCard(...values);

};
for (i = 1; i < 30; i++) {
    requestData(i);
}

const thisIsDumb = async => {

};


const createCard = (id, name, img, level, type) => {
    console.log('we are creating card   ');
    const card = document.createElement('div');
    card.classList.add('card');
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
    card.appendChild(digiInfoTop);
    digiInfoTop.appendChild(digiId);
    digiInfoTop.appendChild(digiName);
    card.appendChild(digiImg);
    digiInfoBottom.appendChild(digilevel);
    digiInfoBottom.appendChild(digiType);
    card.appendChild(digiInfoBottom);
    cardContainer.appendChild(card);
};

requestData();