function loadAnimalCards() {
    console.log(JSON.parse(localStorage.getItem('animals')))
    let animals = JSON.parse(localStorage.getItem('animals')) || [];
    let cardsContainer = document.getElementById('cards-container');

    if(animals==0){
        let aviso=document.createElement("h1")
        aviso.textContent = "Ainda não há pets cadastrados"
        cardsContainer.appendChild(aviso)
        aviso.classList.add("aviso")
    }

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
        let nome = document.createElement('h1');
        nome.textContent = `Nome: ${animal.nome}`
        card.appendChild(nome);
        card.classList.add("nome")

        let raca = document.createElement('p');
        raca.textContent = `Características: ${animal.raca}`
        card.appendChild(raca);
        card.classList.add("info")

        let caracteristicas = document.createElement('p');
        caracteristicas.textContent = `Características: ${animal.caracteristicas}`
        card.appendChild(caracteristicas);
        card.classList.add("info")

        let btnAdotar = document.createElement('a')
        btnAdotar.textContent = 'Adotar'
        card.appendChild(btnAdotar);

        // Adiciona o card ao contêiner de cards
        cardsContainer.appendChild(card);
    })

     document.getElementById('btnAdotar').addEventListener('click', function(){
        alert('Sua requisição de adoção foi enviada para a ONG responsável pelo animal.')
    })
    
}
document.addEventListener('DOMContentLoaded', function() {
    loadAnimalCards();
});
