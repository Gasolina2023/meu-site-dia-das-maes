     document.getElementById('loginForm').addEventListener('submit', function(event) {
         event.preventDefault();
         
         const username = document.getElementById('username').value;
         const password = document.getElementById('password').value;

         // Aqui você pode adicionar lógica de autenticação
         if (username === 'mamae' && password === 'senha123') {
             window.location.href = 'welcome.html';
         } else {
             alert('Usuário ou senha incorretos!');
         }
     });
     