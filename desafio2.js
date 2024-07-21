let calculoVitorias = saldoVitorias(130, 5)
let rank = " "



function saldoVitorias(vitorias, derrotas){
    return vitorias - derrotas

}

if (calculoVitorias <= 10){
    rank = "Ferro"
}else if(calculoVitorias <= 20){
    rank = "Bronze"
}else if(calculoVitorias <= 50){
    rank = "Prata"
}else if(calculoVitorias <= 80){
    rank = "Ouro"
}else if(calculoVitorias <= 90){
    rank = "Diamante"
}else if(calculoVitorias <= 100){
    rank = "Lendário"
}else{(calculoVitorias > 100)
    rank = "Imortal"
}

console.log ("O Herói tem de saldo de "+ calculoVitorias + " está no nível: " + rank)
