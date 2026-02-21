console.log("JS carregado");

const form = document.getElementById("form-despesa");
const lista = document.getElementById("lista-despesa");
const totalElemento = document.getElementById("valor-total");

let despesas = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeInput = document.getElementById("nome-despesa");
    const valorInput = document.getElementById("valor-despesa");

    const nome = nomeInput.value;
    const valor = Number(valorInput.value); 

    despesas.push({ nome, valor });

    const novoItem = document.createElement("li");
    novoItem.textContent = `${nome} - R$ ${valor}`;
    lista.appendChild(novoItem);

    nomeInput.value = "";
    valorInput.value = "";

    let total = 0;
    for (let i = 0; i < despesas.length; i++) {
        total += despesas[i].valor;
    }

    totalElemento.textContent = `Total: R$ ${total}`;
});