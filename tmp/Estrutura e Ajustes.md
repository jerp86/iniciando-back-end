# Requisitos Funcionais - **RF**

Requisitos Funcionais são exatamente quais as funcionalidades necessárias para o tópico. Deve ser descrito ao pé da letra.

# Requisitos Não Funcionais - **RNF**

Requisitos Não Funcionais são coisas que não estão ligados às Regras de Negócio da aplicação. Requisitos mais voltados para a parte técnica como por exemplo escolha de libs, escolha de ferramentas (envio de email, log, criptografia, etc)

# Regras de Negócios - **RN**

Regras de Negócios são regras que devem ser definidas para que as funcionalidades da aplicação funcionem da maneira que foi determinado.
A Regra de Negócio sempre deve estar relacionada à pelo menos 1 Requisito Funcional.

# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de perfil

**RF**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha

# Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- As notificações devem ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1hr exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, ultimo às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
