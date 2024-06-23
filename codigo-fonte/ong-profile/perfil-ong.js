function loadAnimalCards() {
    let animals = JSON.parse(localStorage.getItem('animals')) || [];
    let cardsContainer = document.getElementById('pets');

    animals.forEach(function(animal) {
        // Cria um novo elemento div para representar o card do animal
        let card = document.createElement('div');
        card.classList.add('card');

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

        let caracteristicas = document.createElement('h4');
        caracteristicas.textContent = `Características: ${animal.caracteristicas}`
        card.appendChild(caracteristicas);

        // Adiciona o card ao contêiner de cards
        cardsContainer.appendChild(card);
    });
}

// Chama a função para carregar os cards quando a página carregar
window.addEventListener('load', loadAnimalCards);
