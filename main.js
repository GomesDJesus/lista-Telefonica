const form = document.getElementById('form');
const msgAlerta = document.querySelector('.alerta')
const contato = [];
const fone = [];



form.addEventListener('submit', function(eve) {
  eve.preventDefault();

msgAlerta.style.display = 'none'

addlinha();

})

function addlinha(){

  const nome = document.getElementById('nome');
  const tel = document.getElementById('tel');

if(contato.includes(nome.value) || fone.includes(tel.value)){
  alert(`Contato ${nome.value} ou ${tel.value} ja foi inserido`)
  nome.value = ''; 
  tel.value = ''; 
}else{
  let tbody = document.querySelector('tbody')
  contato.push(nome.value)
  fone.push(tel.value)

  console.log(contato)

    let linha = '<tr>';
    linha += `<td> ${nome.value}</td>`; 
    linha += `<td>${tel.value}</td>`;
    
    nome.value = ''; 
    tel.value = ''; 
    tbody.innerHTML += linha; 

  }
}
