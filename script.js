


// 1- criar id ou class no elemento html.
// * Funcoes para trazer do HtML para o JS
// document.getElementById('data-e-hora') traz apenas um elemento
// document.getElementsByClassName('conteiner-left')[0] traz elementos com o mesmo nome de class, é um array,usa o [0] para selecionar primeira posicao.
// const conteiner = document.getElementsByTagName('div')[5], traz todos os elementos com a tag name
// const conteiner = document.querySelector(".data-e-hora"); chama direto pelo nome criado no HTML.



// 2- criar variavel no JS para receber o elemento HtML.
// A-constantes nao podem ser alterados os valores.
// b-var valores fica disponivel em todo o arquivo.

















const conteiner = document.querySelector(".data-e-hora");
console.log(conteiner)
const meses = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "October", "novembro", "dezembro"];

var dt
var dia
var mes
var ano
var hr
var dataFormatada
var min
var seg



function pegarDataAtualizada() {

  dt = new Date();

  dia = dt.getDate()
  mes = dt.getMonth()
  ano = dt.getFullYear()
  hr = dt.getHours()
  min = dt.getMinutes()
  seg = dt.getSeconds()


  dataFormatada = (hr + ":" + min + ":" + seg + "     " + dia + " " + meses[mes] + " " + ano)


}

function enviarData(data) {
  conteiner.innerHTML = data
}

setInterval(() => {
  pegarDataAtualizada()
  enviarData(dataFormatada)
}, 100)



