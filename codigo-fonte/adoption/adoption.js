function loadAnimalCards() {
    console.log(JSON.parse(localStorage.getItem('animals')))
    let animals = JSON.parse(localStorage.getItem('animals')) || [];
    let cardsContainer = document.getElementById('cards-container');

    animals.forEach(function(animal) {
        // Cria um novo elemento div para representar o card do animal
        let card = document.createElement('div');
        card.classList.add('card-content');

        // Cria um elemento de imagem para exibir a foto do animal, se disponível
        if (animal.foto) {
            let img = document.createElement('img');
            img.src = animal.foto;
            img.alt = 'Foto do animal';
            card.appendChild(img);
        }

        // Cria um elemento de parágrafo para exibir o nome do animal
        let nome = document.createElement('h4');
        nome.textContent = `Nome: ${animal.nome}`
        card.appendChild(nome);

        let raca = document.createElement('h4');
        raca.textContent = `Características: ${animal.raca}`
        card.appendChild(raca);

        let caracteristicas = document.createElement('h4');
        caracteristicas.textContent = `Características: ${animal.caracteristicas}`
        card.appendChild(caracteristicas);

        let btnAdotar = document.createElement('button')
        btnAdotar.textContent = 'Adotar'
        card.appendChild(btnAdotar);

        // Adiciona o card ao contêiner de cards
        cardsContainer.appendChild(card);
    })
}
document.addEventListener('DOMContentLoaded', function() {
    loadAnimalCards();
});

