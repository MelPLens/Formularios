document.addEventListener('DOMContentLoaded', function () {
  var formulario = document.getElementById('formularioInscricao');

  formulario.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita o envio padrão do formulário

      // Coleta os dados do formulário
      var nome = document.getElementById('nome').value;
      var email = document.getElementById('email').value;

      // Crie um objeto com os dados do formulário
      var dadosFormulario = {
          nome: nome,
          email: email
          // Adicione outros campos aqui conforme necessário
      };

      // Envia os dados para a API usando a função fetch
      fetch('https://64f289a2edfa0459f6c5e871.mockapi.io/:endpoint', {
          method: 'POST', // Método HTTP POST para enviar os dados
          headers: {
              'Content-Type': 'application/json' // Tipo de conteúdo JSON
          },
          body: JSON.stringify(dadosFormulario) // Converte os dados para JSON
      })
      .then(function (response) {
          if (!response.ok) {
              throw new Error('Erro ao enviar os dados.'); // Trata erros de resposta da API
          }
          return response.json();
      })
      .then(function (data) {
        
          console.log('Dados enviados com sucesso:', data);
          // página de confirmação aqui
      })
      .catch(function (error) {
          console.error('Erro ao enviar os dados:', error);
      });
  });
});