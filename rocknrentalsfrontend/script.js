const API_URL = "http://localhost:8080/api"; // URL base do backend

// Função para cadastrar um novo usuário
async function cadastrarUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById("cadastroNome").value.trim();
  const email = document.getElementById("cadastroEmail").value.trim();
  const senha = document.getElementById("cadastroSenha").value.trim();

  if (!nome || !email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nome, email: email, password: senha }),
    });

    if (response.ok) {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "login.html";
    } else {
      alert("Erro ao realizar cadastro.");
    }
  } catch (error) {
    console.error("Erro ao conectar ao backend:", error);
  }
}

// Função para realizar login de um usuário
async function loginUsuario(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginPassword").value.trim();

  if (!email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: senha }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Bem-vindo, ${data.name}!`);
      localStorage.setItem("userId", data.id); // Armazena o ID do usuário no localStorage
      window.location.href = "aluguel.html";
    } else {
      alert("Email ou senha inválidos.");
    }
  } catch (error) {
    console.error("Erro ao conectar ao backend:", error);
  }
}


function alugarInstrumento(nomeInstrumento, seletorDiasId) {
  const diasSelecionados = document.getElementById(seletorDiasId).value;
  const dataAluguel = new Date();
  const dataDevolucao = new Date(dataAluguel);
  dataDevolucao.setDate(dataAluguel.getDate() + parseInt(diasSelecionados));

  const meusAlugueis = document.getElementById('meusAlugueis');
  const itemAluguel = document.createElement('div');
  itemAluguel.className = 'col-md-4 mb-4 item-aluguel';
  itemAluguel.setAttribute('data-categoria', 'MeusAlugueis');
  itemAluguel.innerHTML = `
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title">${nomeInstrumento}</h5>
        <p>Data de Devolução: ${dataDevolucao.toLocaleDateString()}</p>
        <p>Tempo Restante: <span class="tempo-restante" data-devolucao="${dataDevolucao}">${diasSelecionados} dias</span></p>
      </div>
    </div>
  `;
  meusAlugueis.appendChild(itemAluguel);

  setInterval(() => {
    const agora = new Date();
    const tempoRestanteElement = itemAluguel.querySelector('.tempo-restante');
    const dataDevolucao = new Date(tempoRestanteElement.getAttribute('data-devolucao'));
    const tempoRestante = Math.ceil((dataDevolucao - agora) / (1000 * 60 * 60 * 24));
    tempoRestanteElement.textContent = `${tempoRestante} dias`;
  }, 1000 * 60 * 60);
}

function filtrarCategoria(categoria) {
  const itens = document.querySelectorAll('.item-aluguel');
  itens.forEach(item => {
    if (categoria === 'Todos' ||
        item.getAttribute('data-categoria') === categoria ||
        item.getAttribute('data-categoria') === 'MeusAlugueis') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}