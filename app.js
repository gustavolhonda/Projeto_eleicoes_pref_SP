function pesquisar() {  
  let section = document.getElementById('resultados-pesquisa');

  let campoPesquisa = document.getElementById('campo-pesquisa').value;

  if (campoPesquisa.trim() === "") {
    section.innerHTML = `
    <div class="item-resultado">
      <p>Nada foi encontrado. Você deve digitar o nome ou partido do candidato.</p>
    </div>`;	
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";

  for(let dado of dados) {
    let nome = dado.nome.toLowerCase();
    let partido = dado.partido.toLowerCase();
    let tags = dado.tags.toLowerCase();

    if (nome.includes(campoPesquisa) ||  partido.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
          <div class="item-resultado">
            <div class="titulo-candidato">
              <h2><a href="${dado.link_wikipedia}" target="_blank" class ="link-wiki">
              ${dado.nome} - (${dado.partido})</a></h2>
            </div>
            <div class="conteudo-flex">
              <div class="foto-candidato">
                <img src="${dado.foto}" alt="Foto de ${dado.nome}" class="foto-candidato">
              </div>
              <div detalhes-candidato>
                <h3 class="bio">Mini bio</h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.propostaPDF}" target="_blank" class = "link-proposta ">Proposta em PDF</a>
                <span> | </span>
                <a href="${dado.propostaResumo}" target="_blank" class = "link-proposta ">Proposta resumida</a>
              </div>
            </div>
          </div>` //bloco maior;  
    } 

  section.innerHTML = resultados;
  }
  if (!resultados) {
    section.innerHTML = `<div class="item-resultado"><p>Nada foi encontrado. Tente novamente.</p></div>`;
  }
}

