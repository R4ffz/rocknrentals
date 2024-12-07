# 🎸 Rock N' Roll Rentals 🎶

**Rock N' Roll Rentals** é uma aplicação web desenvolvida para o aluguel de instrumentos musicais voltada para amantes do rock e heavy metal. O sistema permite que os usuários explorem guitarras, pedais, amplificadores e pedaleiras, realizem aluguéis e gerenciem suas escolhas.

---

## 🚀 Funcionalidades

- **Listagem de Instrumentos**: Exibe todos os instrumentos disponíveis para aluguel, organizados por categorias como Guitarras, Amplificadores, Pedais e Pedaleiras.
- **Filtros por Categoria**: Permite visualizar instrumentos específicos de uma categoria selecionada.
- **Cadastro de Usuários**: Usuários podem se cadastrar e fazer login para acessar o sistema.
- **Aluguel de Instrumentos**: Usuários podem selecionar o período desejado (7, 15 ou 30 dias) para alugar instrumentos.
- **Persistência de Dados**:
    - **Banco de Dados**: Informações sobre usuários armazenadas no banco de dados.
    - **LocalStorage**: Instrumentos alugados são temporariamente salvos no navegador para fácil gerenciamento.

---

## 📁 Estrutura do Projeto

```plaintext
rocknrentals/
├── backend/                # Backend da aplicação
│   ├── src/main/java/
│   │   └── com/rocknrentals/backend/
│   │       ├── config/    # Configuração do CORS e outros serviços
│   │       ├── controller/ # Controladores (UserController)
│   │       ├── model/     # Modelos (User)
│   │       ├── repository/ # Repositórios (JPA)
│   │       ├── service/   # Serviços (UserService)
│   └── resources/
│       ├── application.properties # Configurações do banco de dados
├── rocknrentalsfrontend/   # Frontend da aplicação
│   ├── css/               # Arquivos de estilo
│   ├── js/                # Scripts JavaScript
│   │   └── script.js      # Lógica do frontend
│   ├── index.html         # Página inicial
│   ├── aluguel.html       # Página de aluguel
│   ├── cadastro.html      # Página de cadastro
│   ├── login.html         # Página de login
│   ├── servicos.html      # Página de serviços
│ 
```
## 🛠️Tecnologias Utilizadas

- **Backend**
  - Java (Spring Boot)
  - MySQL para gerenciamento do banco de dados
  - JPA/Hibernate para persistência de dados
  - Postman para testar APIs RESTful
- **Frontend**
  - HTML5
  - CSS3
  - JavaScript
  - Bootstrap para responsividade

---

## Configuração do Ambiente

### Pré-requisitos

- Java 17+
- Maven
- MySQL
- Navegador atualizado

---

## Passos para Rodar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/R4ffz/rocknrentals.git
   
2. Navegue até o diretório do backend:
   ````bash 
     cd rocknrentals/backend
   
3. Configure o banco de dados MySQL:
    ````sql
   CREATE DATABASE rocknrentals;
  Atualize as credenciais em application.properties.
4. Inicie o servidor Spring Boot:
    ````bash
      ./mvnw spring-boot:run
5. Abra o index.html no seu navegador.

---
## 🗄️ Estrutura do Banco de Dados

### Tabela de Usuários (`users`)

| Campo      | Tipo         | Descrição          |
|------------|--------------|--------------------|
| `id`       | INT          | Chave primária     |
| `name`     | VARCHAR(50)  | Nome do usuário    |
| `email`    | VARCHAR(50)  | Email do usuário   |
| `password` | VARCHAR(50)  | Senha do usuário   |

---

## 📝 Autor

**Rafael Barros Cabral**  
Desenvolvido como um projeto de aprendizado de desenvolvimento full-stack.
