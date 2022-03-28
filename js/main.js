var listaJogos = [
    "https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg", 
    "https://upload.wikimedia.org/wikipedia/pt/archive/0/0d/20220111000604%21Elden_Ring_capa.jpg"
]

listaJogos.push("https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png");

var conteudoAdicionado = document.getElementById("conteudo");

function adicionarViaIndex() {
    var jogoAdicionado = document.getElementById("adicionarJogo").value;
    
    if(jogoAdicionado != listaJogos[i]){
        var elementoAdicionado = `<img class="linkJogos" src="${jogoAdicionado}">`;
        listaJogos.push(jogoAdicionado);
        conteudoAdicionado.innerHTML = conteudoAdicionado.innerHTML + elementoAdicionado;
    } else {
        var alert = document.getElementById("alerta")
        alert.innerHTML = `O jogo já foi registrado`
    }

    
}

for (var i = 0; i < listaJogos.length; i++) {
    conteudoAdicionado.innerHTML = conteudoAdicionado.innerHTML + `<img class="linkJogos" src="${listaJogos[i]}">`
}