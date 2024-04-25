const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./img/aprovado.png" alt="Emoji celebr" />';
const imgReprovado = '<img src="./img/reprovado.png" alt="Emoji Sad" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="result aprovado">Aprovado</span>';
const spanReprovado = '<span class="result reprovado">Reprovado</span>';
const msg = document.getElementById('msg');

let linhas = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
  calculaMediaFinal();
});

function adicionaLinha() {
  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotaAtividade = document.getElementById('nota-atividade');

  if (atividades.includes(inputNomeAtividade.value)) {
    msg.innerHTML = `A atividade: ${inputNomeAtividade.value}, já foi inserida.`;
  } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    
    msg.innerHTML = '';
  }

  inputNomeAtividade.value = '';
  inputNotaAtividade.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();

  document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
  document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
  let somaDasNotas = 0;
  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }
  return somaDasNotas / notas.length;
};