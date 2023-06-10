document.addEventListener("DOMContentLoaded", function(){
    var btn = document.getElementById("btn");
    var tabelaContato = document.getElementById("tabela-contatos");

    btn.addEventListener("click", function(){
        var nome = document.getElementById("nome");
        var telefone = document.getElementById("telefone");
        var nomeI = nome.value.trim();
        var telefoneI = telefone.value.trim();

        if(nomeI.length === 0){
            alert("Nome inválido");
            return;
        }

        var nomes = nomeI.split(",");
        var nomesAdd = [];

        for(var i = 0; i < nomes.length; i++){
            var apaNome = nomes[i].trim();
            if(apaNome.length > 0){
                nomesAdd.push(apaNome);
            }
        }

        if(nomesAdd.length === 0){
            alert("Nome inválido");
            return;
        }

        if(nomesAdd.length > 2){
            alert("Nome inválido");
            return;
        }

        if(telefoneI.length === 0){
            alert("Telefone inválido");
        }

        for(var j = 0; j < nomesAdd.length; j++){
            var tr = tabelaContato.insertRow();
            var tdNome = tr.insertCell(0);
            var tdTelefone = tr.insertCell(1);

            tdNome.innerHTML = nomesAdd[j];
            tdTelefone.innerHTML = telefoneI;
        }

        nome.value = "";
        telefone.value = "";
    });
});