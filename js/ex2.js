const listaDeTarefas = [];

function adicionarTarefa(descricao, autor, departamento, importancia) {
  const novaTarefa = {
    descricao,
    autor,
    departamento,
    importancia,
    valor: null,
    duracao: null
  };

  listaDeTarefas.push(novaTarefa);
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById('tarefas');
  lista.innerHTML = '';

  listaDeTarefas.forEach(tarefa => {
    const item = document.createElement('li');
    item.textContent = tarefa.descricao;
    lista.appendChild(item);
  });
}

const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const descricao = document.getElementById('descricao').value;
  const autor = document.getElementById('autor').value;
  const departamento = document.getElementById('departamento').value;
  const importancia = document.getElementById('importancia').value;
  adicionarTarefa(descricao, autor, departamento, importancia);
  form.reset();
});
