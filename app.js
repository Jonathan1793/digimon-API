
const API = 'https://digi-api.com/api/v1/digimon/';
const cardContainer = document.querySelector('.cards-container');
const digimonsArr = [];


const requestData = async (numberOfDigimons = 30, id = 0) => {
    //console.log(id);
    console.log(numberOfDigimons);
    if (numberOfDigimons === 30) {
        for (i = 1; i < numberOfDigimons + 1; i++) {
            if (i === 10) {
                numberOfDigimons++;
                continue;

            }
            console.log(i);
            let search = API + i;
            await fetch(search).then(res => {
                console.log(search);
                if (!res.ok) {
                    throw console.error('no connection made');
                }
                else {
                    console.log('we are here');
                    return res.json().then(digimon => {
                        console.log(digimon.name);
                        if (digimon.id === undefined || digimon.name === undefined || digimon.images[0].href === undefined || digimon.levels.length === 0 || digimon.types.length === 0) {
                            numberOfDigimons++;
                            return;
                        }
                        digimonsArr.push([digimon.id, digimon.name, digimon.images[0].href, digimon.levels, digimon.types]);

                    });
                }
            });


        }
        console.log(digimonsArr);
        digimonsArr.forEach((element, i) => {

            createCard(...element);
        });
    }

};


const thisIsDumb = async => {

};


const createCard = (id, name, img, level = [], type = []) => {
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
    digilevel.innerHTML = 'Level: ' + ((level[0].level.length > 0) ? level[0].level : 'lol');
    const digiType = document.createElement('h2');
    digiType.innerHTML = 'Type: ' + type[0].type;


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

requestData(30, 30);