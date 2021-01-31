window.onload = function() {
//    console.log("Olá Mundo!");
//    console.warn("Presta Atenção mano!");
//    console.error("Errou!!");

    let meuForm = $("form#formAluno");
    console.log(meuForm);

    meuForm.on("submit", function(event) {
        event.preventDefault();
        console.log("Ação efetuada com sucesso");
    
        let botao = $("form#formAluno button");
        console.log(botao);
        let botaoQGira = (Ladda.create(botao[0]));
        botaoQGira.start();

        fetch("http://localhost:8080/sen-api/test.php").then(function(resposta) {
            return resposta.json();
        }).then(function(dados){
            alert(dados.menssagem);
        } );
    });
}