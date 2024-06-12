document.getElementById('sendButton').addEventListener('click', function(){

    // Obtém os valores dos inputs
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let senha = document.getElementById('senha').value;


    let users = JSON.parse(localStorage.getItem('users')) || [];

    let newUser = {
        name: nome,
        email: email,
        password: senha,
        telephone: telefone,
    };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    // Exemplo de feedback ao usuário (opcional)
    alert('Dados armazenados com sucesso!');
})
