// Mapeamento de IDs para dados das receitas
const receitasData = {
  'bolo-chocolate-fit': { nome: 'Bolo de Chocolate Fit', categoria: 'Sobremesas', tempo: '45 min', dificuldade: 'Médio', likes: 120 },
  'brownie-fit': { nome: 'Brownie Fit Zero Açúcar', categoria: 'Sobremesas', tempo: '30 min', dificuldade: 'Fácil', likes: 95 },
  'smoothie-bowl': { nome: 'Smoothie Bowl Tropical', categoria: 'Café da Manhã', tempo: '10 min', dificuldade: 'Muito Fácil', likes: 80 },
  'panquecas-aveia': { nome: 'Panquecas de Aveia', categoria: 'Café da Manhã', tempo: '15 min', dificuldade: 'Fácil', likes: 110 },
  'suco-verde': { nome: 'Suco Verde Detox', categoria: 'Detox', tempo: '5 min', dificuldade: 'Muito Fácil', likes: 65 },
  'omelete-fit': { nome: 'Omelete Fit', categoria: 'Café da Manhã', tempo: '10 min', dificuldade: 'Fácil', likes: 75 },
  'salmao-assado': { nome: 'Salmão Assado com Legumes', categoria: 'Marmitas Fit', tempo: '35 min', dificuldade: 'Médio', likes: 140 },
  'lasanha-vegana': { nome: 'Lasanha de Abobrinha Vegana', categoria: 'Veganas', tempo: '60 min', dificuldade: 'Difícil', likes: 85 },
  'sopa-lentilha': { nome: 'Sopa de Lentilha Nutritiva', categoria: 'Veganas', tempo: '40 min', dificuldade: 'Médio', likes: 70 },
  'smoothie-verde': { nome: 'Smoothie Verde Energético', categoria: 'Detox', tempo: '5 min', dificuldade: 'Muito Fácil', likes: 55 },
  'mousse-chocolate-fit': { nome: 'Mousse de Chocolate Fit', categoria: 'Sobremesas', tempo: '20 min', dificuldade: 'Fácil', likes: 130 },
  'curry-grao-bico': { nome: 'Curry de Grão de Bico', categoria: 'Veganas', tempo: '40 min', dificuldade: 'Médio', likes: 90 }
};

class FavoritosManager {
  constructor() {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  }

  getFavoritos() {
    return this.favoritos;
  }

  removerFavorito(receitaId) {
    this.favoritos = this.favoritos.filter(id => id !== receitaId);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}

class PublicadasManager {
  constructor() {
    // Simulando receitas públicas do usuário (em um app real, viria do backend)
    this.receitasPublicas = [
      'smoothie-verde',
      'curry-grao-bico',
      'mousse-chocolate-fit',
      'panquecas-aveia'
    ];
  }

  getReceitasPublicas() {
    return this.receitasPublicas;
  }
}

const favoritosManager = new FavoritosManager();
const publicadasManager = new PublicadasManager();

function criarCardPublicada(receitaId) {
  const receita = receitasData[receitaId];
  if (!receita) return null;

  return `
    <div class="card" data-receita-id="${receitaId}">
      <div class="imagem"></div>
      <div class="categoria">${receita.categoria}</div>
      <h4>${receita.nome}</h4>
      <div class="info-receita">
        <span><i class="fas fa-clock"></i> ${receita.tempo}</span>
        <span><i class="fas fa-signal"></i> ${receita.dificuldade}</span>
        <span><i class="fas fa-heart"></i> ${receita.likes}</span>
      </div>
      <button class="btn-roxo" onclick="verReceita('${receitaId}')">Ver Receita</button>
    </div>
  `;
}

function criarCardFavorito(receitaId) {
  const receita = receitasData[receitaId];
  if (!receita) return null;

  return `
    <div class="card" data-receita-id="${receitaId}">
      <div class="imagem"></div>
      <div class="categoria">${receita.categoria}</div>
      <h4>${receita.nome}</h4>
      <div class="info-receita">
        <span><i class="fas fa-clock"></i> ${receita.tempo}</span>
        <span><i class="fas fa-signal"></i> ${receita.dificuldade}</span>
        <span><i class="fas fa-heart"></i> ${receita.likes}</span>
      </div>
      <div class="card-actions">
        <button class="btn-roxo" onclick="verReceita('${receitaId}')">Ver Receita</button>
        <button class="btn-remover" onclick="removerFavorito('${receitaId}')" title="Remover dos favoritos">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `;
}

function carregarFavoritos() {
  const containerFavoritas = document.getElementById('favoritas');
  const favoritos = favoritosManager.getFavoritos();
  
  if (favoritos.length === 0) {
    containerFavoritas.innerHTML = `
      <div class="sem-favoritas">
        <i class="fas fa-heart" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
        <p>Você ainda não tem receitas favoritas.</p>
        <p>Explore nossas receitas e favorite as que mais gostar!</p>
        <a href="receitas.html" class="btn-roxo">Explorar Receitas</a>
      </div>
    `;
  } else {
    const cardsHtml = favoritos.map(id => criarCardFavorito(id)).filter(card => card).join('');
    containerFavoritas.innerHTML = `
      <h3>Suas Receitas Favoritas (${favoritos.length})</h3>
      <div class="cards-receitas">
        ${cardsHtml}
      </div>
    `;
  }
}

function carregarPublicadas() {
  const containerPublicadas = document.getElementById('publicadas');
  const receitasPublicas = publicadasManager.getReceitasPublicas();
  
  const cardsHtml = receitasPublicas.map(id => criarCardPublicada(id)).filter(card => card).join('');
  containerPublicadas.innerHTML = `
    <h3>Receitas Publicadas</h3>
    <div class="cards-receitas">
      ${cardsHtml}
    </div>
    <button class="btn-verde" id="btn-publicar-nova-receita">+ Publicar Nova Receita</button>
  `;
  
  // Adicionar evento de clique ao botão após ele ser criado
  document.getElementById('btn-publicar-nova-receita').addEventListener('click', publicarNovaReceita);
}

function verReceita(receitaId) {
  window.location.href = `receita-detalhes.html?id=${receitaId}`;
}

function removerFavorito(receitaId) {
  if (confirm('Tem certeza que deseja remover esta receita dos favoritos?')) {
    favoritosManager.removerFavorito(receitaId);
    carregarFavoritos();
  }
}

function publicarNovaReceita() {
  window.location.href = 'publicar.html';
}

const abas = document.querySelectorAll('.aba');
const conteudos = document.querySelectorAll('.conteudo');

abas.forEach(botao => {
  botao.addEventListener('click', () => {
    abas.forEach(b => b.classList.remove('ativa'));
    conteudos.forEach(c => c.classList.remove('ativa'));

    botao.classList.add('ativa');
    const alvo = document.getElementById(botao.dataset.alvo);
    alvo.classList.add('ativa');
    
    // Carregar conteúdo quando a aba for clicada
    if (botao.dataset.alvo === 'favoritas') {
      carregarFavoritos();
    } else if (botao.dataset.alvo === 'publicadas') {
      carregarPublicadas();
    }
  });
});

// Gerenciamento do perfil do usuário
class PerfilManager {
  constructor() {
    this.perfil = JSON.parse(localStorage.getItem('perfilUsuario')) || {
      nomeCompleto: 'Usuário Exemplo',
      nomeUsuario: 'usuario',
      email: 'usuario@exemplo.com',
      idade: '',
      restricoes: '',
      tipoConta: 'usuario',
      dietasPreferidas: ''
    };
  }

  salvarPerfil(dadosPerfil) {
    this.perfil = { ...this.perfil, ...dadosPerfil };
    localStorage.setItem('perfilUsuario', JSON.stringify(this.perfil));
  }

  getPerfil() {
    return this.perfil;
  }

  calcularProgresso() {
    const camposObrigatorios = ['nomeCompleto', 'nomeUsuario', 'email', 'tipoConta'];
    let camposPreenchidos = 0;
    
    camposObrigatorios.forEach(campo => {
      if (this.perfil[campo] && this.perfil[campo].toString().trim() !== '') {
        camposPreenchidos++;
      }
    });
    
    return Math.round((camposPreenchidos / camposObrigatorios.length) * 100);
  }
}

const perfilManager = new PerfilManager();

function carregarDadosPerfil() {
  const perfil = perfilManager.getPerfil();
  const infoSection = document.getElementById('info');
  
  const inputs = infoSection.querySelectorAll('input, textarea, select');
  inputs[0].value = perfil.nomeCompleto;
  inputs[1].value = perfil.nomeUsuario;
  inputs[2].value = perfil.email;
  inputs[3].value = perfil.idade || '';
  inputs[4].value = perfil.restricoes || '';
  inputs[5].value = perfil.tipoConta;
  inputs[6].value = perfil.dietasPreferidas || '';
  
  // Atualizar card lateral
  const nomeCard = document.querySelector('.perfil-card h2');
  const emailCard = document.querySelector('.perfil-card .email');
  nomeCard.textContent = perfil.nomeCompleto;
  emailCard.textContent = perfil.email;
  
  atualizarProgresso();
}

function salvarAlteracoesPerfil() {
  const infoSection = document.getElementById('info');
  const inputs = infoSection.querySelectorAll('input, textarea, select');
  
  const dadosPerfil = {
    nomeCompleto: inputs[0].value,
    nomeUsuario: inputs[1].value,
    email: inputs[2].value,
    idade: parseInt(inputs[3].value),
    restricoes: inputs[4].value,
    tipoConta: inputs[5].value,
    dietasPreferidas: inputs[6].value
  };
  
  perfilManager.salvarPerfil(dadosPerfil);
  
  const nomeCard = document.querySelector('.perfil-card h2');
  nomeCard.textContent = dadosPerfil.nomeCompleto;
  
  atualizarProgresso();
  atualizarTagsDietas(dadosPerfil.dietasPreferidas);
  
  alert('Perfil atualizado com sucesso!');
}

function atualizarProgresso() {
  const progresso = perfilManager.calcularProgresso();
  const textoProgresso = document.querySelector('.progresso p');
  const barraPreenchida = document.querySelector('.preenchida');
  
  textoProgresso.textContent = `Progresso do Perfil (${progresso}%)`;
  barraPreenchida.style.width = `${progresso}%`;
}

function atualizarTagsDietas(dietasTexto) {
  const tagsContainer = document.querySelector('.tags');
  tagsContainer.innerHTML = '';
  
  if (dietasTexto && dietasTexto.trim()) {
    const dietas = dietasTexto.split(',').map(d => d.trim()).filter(d => d);
    dietas.forEach(dieta => {
      const tag = document.createElement('span');
      tag.className = 'tag verde';
      tag.textContent = dieta;
      tagsContainer.appendChild(tag);
    });
  }
}

// Carregar conteúdo na inicialização se as abas estiverem ativas
document.addEventListener('DOMContentLoaded', () => {
  carregarDadosPerfil();
  
  const perfil = perfilManager.getPerfil();
  atualizarTagsDietas(perfil.dietasPreferidas);
  
  const btnSalvar = document.querySelector('#info .btn-roxo');
  btnSalvar.addEventListener('click', salvarAlteracoesPerfil);
  
  const abaFavoritasAtiva = document.querySelector('.aba[data-alvo="favoritas"].ativa');
  if (abaFavoritasAtiva) {
    carregarFavoritos();
  }
  
  const abaPublicadasAtiva = document.querySelector('.aba[data-alvo="publicadas"].ativa');
  if (abaPublicadasAtiva) {
    carregarPublicadas();
  }
});