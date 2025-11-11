<h1>CRUD de Usuários - Front-End</h1>
<p>
  Este projeto é a interface front-end de um sistema de gerenciamento de
  usuários, construído em <strong>React 19</strong> com
  <strong>TypeScript</strong>. Ele integra <strong>Formik</strong> e
  <strong>Yup</strong> para validação de formulários,
  <strong>Axios</strong> para comunicação com a API REST, e utiliza
  <strong>Styled Components</strong> para estilização modular. O front-end
  gerencia autenticação via token JWT, manipula erros de backend de forma
  estruturada e oferece componentes reutilizáveis para formulários, botões e
  navegação. O backend utiliza Java 21.
</p>
<h2>Repositório do Sistema Backend</h2>
🔗
<a href="https://github.com/AsrielDreemurrGM/User_CRUD_API"> User_CRUD_API </a>
<h2>Vídeo Mostrando o Projeto</h2>
🔗
<a href="https://youtu.be/j6kEOh9wvXM">Veja um vídeo do projeto no YouTube</a>
<h2>🚀 Funcionalidades</h2>
<ul>
  <li>Registro de usuários com validação de formulários</li>
  <li>Listagem de usuários com opções de editar e excluir</li>
  <li>Edição de usuários existente com validação de campos opcionais</li>
  <li>
    Gerenciamento de autenticação via token JWT armazenado no localStorage
  </li>
  <li>Integração com backend Spring Boot via Axios</li>
  <li>Tratamento de erros com tipos customizados e mensagens detalhadas</li>
  <li>Componentes reutilizáveis: botões, formulários e navegação</li>
  <li>Estilização consistente com Styled Components</li>
</ul>
<h2>🛠️ Stack Tecnológica</h2>
<ul>
  <li><strong>React:</strong> 19.1.1</li>
  <li><strong>TypeScript:</strong> 5.9.3</li>
  <li><strong>Axios:</strong> ^1.13.2</li>
  <li><strong>Formik:</strong> ^2.4.9</li>
  <li><strong>Yup:</strong> ^1.7.1</li>
  <li><strong>Styled Components:</strong> ^6.1.19</li>
  <li><strong>React Router DOM:</strong> ^7.9.5</li>
  <li>
    <strong>ESLint + Prettier:</strong> Configuração para qualidade e
    padronização de código
  </li>
</ul>
<h2>📂 Estrutura do Projeto</h2>
<ul>
  <li>
    <strong>src/components:</strong> Componentes reutilizáveis como botões,
    formulários e cabeçalho
  </li>
  <li>
    <strong>src/pages:</strong> Páginas de registro, edição e listagem de
    usuários
  </li>
  <li><strong>src/utils:</strong> Bootstrap de token JWT</li>
  <li><strong>src/styles:</strong> Styled Components global</li>
  <li>
    <strong>src/types:</strong> Tipos e interfaces customizadas para
    formulários, payloads e respostas do backend
  </li>
</ul>
<h2>📑 Tipos e Interfaces</h2>
<ul>
  <li>
    <strong>AxiosErrorResponse:</strong> Tipagem para respostas de erro do Axios
  </li>
  <li>
    <strong>BackendError:</strong> Tipagem para respostas de erro do backend
  </li>
  <li>
    <strong>BootstrapResponse:</strong> Interface para resposta da rota de
    bootstrap e gerenciamento de token JWT
  </li>
  <li>
    <strong>Forms:</strong> Tipos para valores de formulários de registro e
    edição
  </li>
  <li>
    <strong>UserPayloads:</strong> Interfaces para respostas do backend,
    requisções do frontend e payload de atualização de usuários existentes
  </li>
</ul>
<h2>🧪 Testes e Validações</h2>
<ul>
  <li>Validação dos formulários usando Yup</li>
  <li>
    Tratamento de erros com tipos customizados para capturar mensagens
    detalhadas do backend
  </li>
  <li>
    Componentes testados visualmente e funcionalmente durante desenvolvimento
  </li>
</ul>
<h2>⚙️ Primeiros Passos</h2>
<ol>
  <li>
    Clone o repositório:
    <pre><code>git clone https://github.com/AsrielDreemurrGM/User_CRUD.git</code></pre>
  </li>
  <li>
    Instale as dependências:
    <pre><code>npm install</code></pre>
  </li>
  <li>
    Clone o repositório de backend e siga as instruções no README e schema.sql:
    <pre><code>git clone https://github.com/AsrielDreemurrGM/User_CRUD_API.git</code></pre>
  </li>
  <li>
    Após ter o sistema backend rodando, inicie o projeto frontend em modo de desenvolvimento:
    <pre><code>npm run dev</code></pre>
  </li>
  <li>
    Acesse o front-end no navegador:
    <pre><code>http://localhost:5173</code></pre>
  </li>
</ol>
<h2>📜 Histórico de Commits Relevantes</h2>
<ul>
  <li>
    Inicialização do projeto React com TypeScript e configuração de ferramentas
    (ESLint, Prettier, Vite)
  </li>
  <li>Criação de Header e Footer responsivos</li>
  <li>Implementação do formulário de registro e integração com API</li>
  <li>Configuração de navegação com React Router DOM</li>
  <li>Adição da listagem de usuários, edição e exclusão</li>
  <li>
    Criação de tipos customizados e refatoração de formulários para tipagem e
    validação aprimorada
  </li>
  <li>Gestão de token JWT e bootstrap de autenticação</li>
  <li>Refatoração de componentes reutilizáveis e estilização consistente</li>
</ul>
