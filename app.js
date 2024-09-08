function pesquisar() {  
  let section = document.getElementById('resultados-pesquisa');

  let campoPesquisa = document.getElementById('campo-pesquisa').value;

  if (campoPesquisa.trim() === "") {
    section.innerHTML = "Nada foi encontrado. Você deve digitar o nome ou partido do candidato.";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";

  for(let dado of dados) {
    let nome = dado.nome.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let partido = dado.partido.toLowerCase();
    let tags = dado.tags.toLowerCase();

    if (nome.includes(campoPesquisa) ||  partido.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
          <div class="item-resultado">
            <h2><a href="${dado.link_wikipedia}">${dado.nome} - (${dado.partido})</a></h2>
            <h3>Mini bio</h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.proposta}" target="_blank" class = "link_proposta ">Propostas</a>
          </div>`;  
    } 

    if (!resultados) {
      resultados = "Nada foi encontrado. Tente novamente.";
    }

  section.innerHTML = resultados;
}
}

