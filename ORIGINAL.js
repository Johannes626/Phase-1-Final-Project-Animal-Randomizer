const randomizerBttn = document.querySelector('#randomizer-bttn');
const animalContainer = document.querySelector('#animal-container');

randomizerBttn.addEventListener('click', function(){
    
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

    const animalGenInfo = document.createElement('p');
    animalGenInfo.className = "animal-info";
    animalGenInfo.textContent = `The ${randAnimal.name} is a ${randAnimal.active_time.toLowerCase()} 
        ${randAnimal.animal_type.toLowerCase()} found in ${randAnimal.habitat.toLowerCase()} habitats within 
        ${randAnimal.geo_range} and their average lifespan is ${randAnimal.lifespan} years.`;

    const animalDiet = document.createElement('p');
    animalDiet.className = "animal-info";
    animalDiet.id = "animal-diet";
    animalDiet.textContent = `Diet: ${randAnimal.diet}`;

    const animalWeight = document.createElement('p');
    animalWeight.className = "animal-info";
    animalWeight.textContent = `Weight: ${randAnimal.weight_min} lbs. - ${randAnimal.weight_max} lbs.`;

    const animalLength = document.createElement('p');
    animalLength.className = "animal-info";
    animalLength.textContent = `Length: ${randAnimal.length_min} ft. - ${randAnimal.length_max} ft.`;

    newAnimalCard.append(animalName, animalImg, animalGenInfo, animalDiet, animalWeight, animalLength);
    });
});