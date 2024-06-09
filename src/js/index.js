
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1
  if (ehUltimoCartao) return;
  esconderCartoesSelecionado();
 
  cartaoAtual++;
  console.log(cartoes[cartaoAtual]);
  cartoes[cartaoAtual].classList.add("selecionado");
});
btnVoltar.addEventListener("click", function () {
  const ehprimeiroCartao = cartaoAtual === 0
    if(ehprimeiroCartao) return;
  esconderCartoesSelecionado();
 
  cartaoAtual--;
  console.log(cartoes[cartaoAtual]);
  cartoes[cartaoAtual].classList.add("selecionado");
});
function esconderCartoesSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
   
    cartaoSelecionado.classList.remove("selecionado");
}

