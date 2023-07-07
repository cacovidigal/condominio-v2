//quando inserir uma informação deve acrescentar uma linha na planilha com a infomação acrescentada
function adicionarLinha() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var atividade = document.getElementById("inserir_atividade").value;
    var responsavel = document.getElementById("inserir_responsavel").value;
    var inicio = document.getElementById("inserir_data_inicio").value;
    var fim = document.getElementById("inserir_data_fim").value;
    var historico = document.getElementById("inserir_histórico").value;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = atividade;
    cell2.innerHTML = responsavel;
    cell3.innerHTML = inicio;
    cell4.innerHTML = fim;
    cell5.innerHTML = historico;
  }
  