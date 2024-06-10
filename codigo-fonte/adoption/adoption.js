// Função para carregar os dados do localStorage e criar a tabela
function loadAnimalTable() {
    let animals = JSON.parse(localStorage.getItem('animals')) || [];

    let tableBody = document.querySelector('#animalTable tbody');

    console.log('teste')

    animals.forEach(function(animal) {
        let row = tableBody.insertRow();
        row.insertCell(0).innerHTML = `<img src="${animal.foto}" alt="Foto do animal">`;
        row.insertCell(1).textContent = animal.nome;
        row.insertCell(2).textContent = animal.especie;
        row.insertCell(3).textContent = animal.raca;
        row.insertCell(4).textContent = animal.caracteristicas; 
        let linkCell = row.insertCell(5);
        let link = document.createElement('a');
        link.href = 'google.com'; // Substitua 'link_do_seu_destino.html' pelo URL desejado
        link.textContent = 'Adotar'; // Substitua 'Texto do link' pelo texto do link desejado
        linkCell.appendChild(link); // Adiciona o link à célula da tabela
    })
}

// Chama a função para carregar a tabela quando a página carregar
window.addEventListener('load', loadAnimalTable);
