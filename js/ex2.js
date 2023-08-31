// Inicialização de um array vazio para armazenar as tarefas.
const tarefas = [];

// Obtenção de referências aos elementos HTML relevantes.
const form = document.getElementById('form');
const descricaoInput = document.getElementById('descricao');
const autorInput = document.getElementById('autor');
const departamentoInput = document.getElementById('departamento');
const importanciaInput = document.getElementById('importancia');
const valorInput = document.getElementById('valor');
const duracaoInput = document.getElementById('duracao');
const tarefasList = document.getElementById('tarefas');

// Função para adicionar uma nova tarefa quando o formulário é submetido.
function adicionarTarefa(event) {
  event.preventDefault();

  // Coleta dos valores dos campos de entrada do formulário.
  const descricao = descricaoInput.value;
  const autor = autorInput.value;
  const departamento = departamentoInput.value;
  const importancia = parseInt(importanciaInput.value);
  const valor = valorInput.value;
  const duracao = duracaoInput.value;

  // Criação de um objeto para representar a nova tarefa.
  const novaTarefa = {
    descricao,
    autor,
    departamento,
    importancia,
    valor,
    duracao
  };

  // Adição da nova tarefa ao array de tarefas.
  tarefas.push(novaTarefa);

  // Chamada da função para atualizar a lista exibida na página.
  atualizarLista();

  // Limpeza dos campos de entrada do formulário.
  descricaoInput.value = '';
  autorInput.value = '';
  departamentoInput.value = '';
  importanciaInput.value = '';
  valorInput.value = '';
  duracaoInput.value = '';
}

// Função para atualizar a lista de tarefas exibida na página.
function atualizarLista() {
  // Limpa o conteúdo atual da lista de tarefas.
  tarefasList.innerHTML = '';

  // Ordena as tarefas por ordem de importância (decrescente).
  const tarefasOrdenadas = tarefas.slice().sort((a, b) => b.importancia - a.importancia);

  // Criação de elementos HTML para cada tarefa e sua exibição na lista.
  tarefasOrdenadas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      Descrição: ${tarefa.descricao}<br>
      Autor: ${tarefa.autor}<br>
      Departamento: ${tarefa.departamento}<br>
      Importância: ${tarefa.importancia}<br>
      Valor: ${tarefa.valor}<br>
      Duração: ${tarefa.duracao}
    `;

    // Criação de um botão "Excluir" para cada tarefa.
    const excluirBtn = document.createElement('button');
    excluirBtn.innerText = 'Excluir';
    excluirBtn.addEventListener('click', () => excluirTarefa(index));
    li.appendChild(excluirBtn);

    // Adição da tarefa à lista de tarefas exibida na página.
    tarefasList.appendChild(li);
  });
}

// Função para excluir uma tarefa do array e atualizar a lista exibida.
function excluirTarefa(index) {
  tarefas.splice(index, 1);
  atualizarLista();
}

// Adiciona um listener para a submissão do formulário, que chama adicionarTarefa().
form.addEventListener('submit', adicionarTarefa);

// Chama a função para inicializar a lista de tarefas exibida na página.
atualizarLista();
