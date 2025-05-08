     document.getElementById('loginForm').addEventListener('submit', function(event) {
         event.preventDefault();
         
         const username = document.getElementById('username').value;
         const password = document.getElementById('password').value;

         // Aqui você pode adicionar lógica de autenticação
         if (username === 'isabel' && password === '1105') {
             window.location.href = 'aqui.html';
         } else {
             alert('Usuário ou senha incorretos!');
         }
     });
     