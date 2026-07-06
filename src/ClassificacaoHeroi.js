let nome = "Gordox";
let quantidadeXp = 0;
let classificacao;

while(!classificacao){
switch (true){
    case quantidadeXp < 1000:
        classificacao = "ferro"
        break

    case quantidadeXp >= 1001 && quantidadeXp <=2000:
        classificacao= "bronze"
        break

    case quantidadeXp >= 2001 && quantidadeXp <=5000:
        classificacao = "prata"
        break

    case quantidadeXp >= 5001 && quantidadeXp <=7000:
        classificacao = "ouro"
        break


    case quantidadeXp >= 7001 && quantidadeXp <= 8000:
        classificacao = "platina"
        break

    case quantidadeXp >= 8001 && quantidadeXp <=9000:
        classificacao = "ascendente"
        break

    case quantidadeXp >= 9001 && quantidadeXp <=10000:
        classificacao = "imortal"
        break

    case quantidadeXp >= 10001:
        classificacao = "radiante"
        break
    default : 
        console.log("Sem nome e classificação")
}
    console.log("O Herói de nome " + nome + " está no nível " + classificacao)
};
