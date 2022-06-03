let num1 = Number(10.12403928321)

console.log(num1.toFixed(2)) // 2 casas decimais 

console.log(num1.toFixed(2).replace('.', ',')) // muda o ponto para virgula

console.log(num1.LocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))