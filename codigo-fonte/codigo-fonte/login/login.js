function findUserByEmailAndPassword(email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email && user.password === password);
}
function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = findUserByEmailAndPassword(email, password);
    if (user) {
        console.log('Usuário encontrado:', user);
        alert('Login bem-sucedido! Bem-vindo, ' + user.name);
        window.location.href = '../ong-profile/ongProfile.html'
    } else {
        console.log('Usuário não encontrado ou credenciais inválidas');
        alert('Erro de login! Verifique suas credenciais.');
    }
}

document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    login(); 
});
