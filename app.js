function pesquisar() {  
  let section = document.getElementById('resultados-pesquisa');

  let resultados = "";

  for(let dado of dados) {
    resultados += `
          <div class="item-resultado">
            <h2><a href="${dado.link_wikipedia}">${dado.nome} - (${dado.partido})</a></h2>
            <h3>Mini bio</h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.proposta}" target="_blank" class = "link_proposta">Propostas</a>
          </div>`
  }

  section.innerHTML = resultados;
}


