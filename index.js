const randomizerBttn = document.querySelector('#randomizer-bttn');
const animalContainer = document.querySelector('#animal-container');
const bodySelect = document.getElementsByTagName('body')

console.log(bodySelect)
randomizerBttn.addEventListener('click', function() {
    
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then(response => response.json())
    .then(randAnimal => {

        animalContainer.replaceChildren();

        const newAnimalCard = document.createElement('div');
        newAnimalCard.id = "animal-card";
        animalContainer.append(newAnimalCard);

        const animalName = document.createElement('h2');
        animalName.id = "animal-name";
        animalName.textContent = `${randAnimal.name} (${randAnimal.animal_type.toLowerCase()})`;

        const animalImg = document.createElement('img');
        animalImg.id = "animal-image";
        animalImg.src = randAnimal.image_link;
        animalImg.alt = `${randAnimal.name} image`;
        const hoverDiv = document.createElement('div');

        animalImg.addEventListener('mouseenter', function(){
            hoverDiv.id = "hover-div";
            hoverDiv.textContent = `Scientific name: ${randAnimal.latin_name}`;
            newAnimalCard.append(hoverDiv);
        });

        animalImg.addEventListener('mouseleave', () => newAnimalCard.removeChild(hoverDiv));
        
        const animalElement = (textContent) => {
            const indivElem = document.createElement('p');
            indivElem.className = "animal-info";
            indivElem.textContent = textContent;
            return indivElem;
        };
        
        const animalGenInfo = animalElement(`The ${randAnimal.name} is a ${randAnimal.active_time.toLowerCase()} 
        ${randAnimal.animal_type.toLowerCase()} found in ${randAnimal.habitat.toLowerCase()} habitats within 
        ${randAnimal.geo_range} and their average lifespan is ${randAnimal.lifespan} years.`);
        const animalDiet = animalElement(`Diet: ${randAnimal.diet}`);
        const animalWeight = animalElement(`Weight: ${randAnimal.weight_min} lbs. - ${randAnimal.weight_max} lbs.`);
        const animalLength = animalElement(`Length: ${randAnimal.length_min} ft. - ${randAnimal.length_max} ft.`);
        
        newAnimalCard.append(animalName, animalImg, animalGenInfo, animalDiet, animalWeight, animalLength);
    });
});