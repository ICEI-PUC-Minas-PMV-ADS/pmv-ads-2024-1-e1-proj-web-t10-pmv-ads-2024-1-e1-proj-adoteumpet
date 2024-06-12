function loadAnimalTable() {
    let animals = JSON.parse(localStorage.getItem('animals')) || [];

    let tableBody = document.querySelector('#animalTable tbody');

    console.log('teste')

    animals.forEach(function(animal) {
        let row = tableBody.insertRow();
        row.insertCell(0).innerHTML = <img src="${animal.foto}" alt="Foto do animal">;
        row.insertCell(1).textContent = animal.nome;
        row.insertCell(2).textContent = animal.especie;
        row.insertCell(3).textContent = animal.raca;
        row.insertCell(4).textContent = animal.caracteristicas; 
        let linkCell = row.insertCell(5);
        let link = document.createElement('a');
        link.href = 'google.com';
        link.textContent = 'Adotar';
        linkCell.appendChild(link);
    })
}

window.addEventListener('load', loadAnimalTable);
