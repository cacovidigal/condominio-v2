alert('veja o passo a passo para inclui o envio de e-mail :-) ')
//fazer uma função para envio de e-mail para um enderço especifico tipo contato@xyz.com.br
/*
Olá! Claro, posso ajudá-lo a criar uma função JavaScript para enviar e-mails. Para enviar e-mails por meio do JavaScript, geralmente usamos um serviço de terceiros que permita o envio de e-mails via API. Neste exemplo, usaremos o serviço "Email.js" para enviar e-mails usando JavaScript. Certifique-se de criar uma conta gratuita no Email.js em https://www.emailjs.com/ antes de prosseguir.

Aqui estão os passos para criar uma função para enviar e-mails com o Email.js:

Passo 1: Configuração do Email.js
1. Crie uma conta no Email.js e faça login.
2. Crie um novo serviço e um novo modelo de e-mail com os campos que você deseja, como destinatário, assunto, corpo, etc.
3. Anote o "User ID", "Service ID" e "Template ID" do modelo de e-mail.

Passo 2: Configuração da Biblioteca do Email.js
Inclua a biblioteca do Email.js em seu projeto. Você pode usar o seguinte link de script no seu arquivo HTML:

```html
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
```

Passo 3: Crie a função para enviar o e-mail

```html
<!-- No arquivo HTML -->
<button onclick="enviarEmail()">Enviar E-mail</button>
```

```javascript
// No arquivo JavaScript
function enviarEmail() {
  // Configuração do Email.js
  emailjs.init("seu_user_id"); // Substitua "seu_user_id" pelo seu User ID do Email.js

  // Parâmetros do e-mail
  var params = {
    to_email: "destinatario@example.com", // E-mail do destinatário
    from_name: "Seu Nome", // Seu nome remetente
    message: "Olá, este é um e-mail de teste enviado via JavaScript com Email.js!", // Corpo do e-mail
    // Outros campos que você configurou no modelo de e-mail
  };

  // Envio do e-mail
  emailjs.send("seu_service_id", "seu_template_id", params) // Substitua "seu_service_id" e "seu_template_id" pelos IDs correspondentes do seu serviço e modelo de e-mail
    .then(function(response) {
      console.log("E-mail enviado com sucesso!", response);
    }, function(error) {
      console.log("Falha ao enviar o e-mail!", error);
    });
}
```

Lembre-se de substituir os placeholders "seu_user_id", "seu_service_id" e "seu_template_id" com os valores corretos que você anotou no Passo 1.

Essa função enviará um e-mail usando o serviço do Email.js quando o botão "Enviar E-mail" no seu HTML for clicado. Tenha em mente que a função enviará o e-mail usando a conta que você criou no Email.js. Certifique-se de que você esteja respeitando as políticas de uso e restrições do serviço.

*/