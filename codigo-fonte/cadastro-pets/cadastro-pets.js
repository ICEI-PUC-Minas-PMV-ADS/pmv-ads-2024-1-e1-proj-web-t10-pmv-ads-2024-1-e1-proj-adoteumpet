let submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function() {

    let nome = document.getElementById('nome').value;
    let especie = document.getElementById('especie').value;
    let raca = document.getElementById('raca').value;
    let caracteristicas = document.getElementById('caracteristicas').value;
    var foto = document.getElementById("foto").value;
    
    let animals = JSON.parse(localStorage.getItem('animals')) || []

    let newAnimal = {
        nome: nome,
        especie: especie,
        raca: raca,
        caracteristicas: caracteristicas,
        foto: foto
    }

    animals.push(newAnimal);

    localStorage.setItem('animals', JSON.stringify(animals));

    alert('Dados armazenados com sucesso!');
})
