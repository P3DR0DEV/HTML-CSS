//document.getElementById("count").innerText = 5
//let count = 0
//console.log(count)

//let myAge = 20 
//let idadeCachorro = idadeHumana * 7

//console.log(idadeCachorro)

let count = 0
window.confirm('Enjoying JavaScript?') // janela de confirmação
let nome = window.prompt('What\'s your name? ') // Janela que recebe uma string no navegador
let num1 = window.prompt('Digite um número:')
let num2 = window.prompt('Digite outro número:') 

num1 = Number.parseInt(num1) // ou num1 = Number.parseInt(window.prompt(Digite um número:))
num2 = Number.parseInt(num2) // ou Number(num2)

// parseInt == Para converter para inteiro
//parseFloat == Para converter para números reais 

let sum = num1 +num2

function somar() {
    alert(`${nome}, a soma dos 2 números digitados equivale a: ${sum}`)
    //alert(`${sum.localeString('pt-BR', {style: 'currency', currency: 'BRL'})}`) // Janela de alerta
}

increment()
