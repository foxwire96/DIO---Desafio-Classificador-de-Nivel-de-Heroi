function calcular(vitoria, derrota) {
    return vitoria - derrota;    
}

let vitoria = 50;
let derrota = 6;
let nivel;

switch (true) {
    case vitoria<= 10:
      nivel = "Ferro";
      break;
    case vitoria >= 11 && vitoria<=20:
        nivel = "Bronze";
        break;
    case vitoria>=21 && vitoria<=50:
        nivel = "Prata";
        break;
    case vitoria>=51 && vitoria<=80:
        nivel = "Ouro";
        break;
    case vitoria>=81 && vitoria<=90:
        nivel = "Diamante";
        break;
    case vitoria>=91 && vitoria<=100:
        nivel = "Lendário";
        break;
    case vitoria>= 101:
        nivel = "Imortal";
        break;
}

let resultado = calcular(vitoria, derrota);
console.log("O herói tem de saldo "+resultado+" e está no nivel "+nivel)