let namePlayer = "Nagato"
let xpPlayer = 999
let nivelPlayer = " "

if(xpPlayer <= 1000){
    nivelPlayer = "Ferro"
}else if(xpPlayer <= 2000){
    nivelPlayer = "Bronze"
}else if(xpPlayer <= 5000){
    nivelPlayer = "Prata"
}else if(xpPlayer <= 7000){
    nivelPlayer = "Ouro"
}else if(xpPlayer <= 8000){
    nivelPlayer = "Platina"
}else if(xpPlayer <= 9000){
    nivelPlayer = "Ascendente"
}else if(xpPlayer <= 10000){
    nivelPlayer = "Imortal"
}else{(xpPlayer > 10000)
    nivelPlayer = "Radiante"

}

console.log("O Herói de nome " + namePlayer + " está no nível: " + nivelPlayer)