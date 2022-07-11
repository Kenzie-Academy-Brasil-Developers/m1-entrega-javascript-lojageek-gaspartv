let listFigure = []
let listPainting = []

function createActionItem(imagem, nome, valor){
  let item = {
    imagem: imagem,
    nome: nome,
    valor: valor
  }
  return item
}

function createPaintingItem(imagem, nome, valor){
  let item = {
    imagem: imagem,
    nome: nome,
    valor: valor
  }
  return item
}

for (let i = 0; i < produtosGeek.length; i++) {
  if (produtosGeek[i].categoria == "painting") {
    listPainting.push(createPaintingItem(produtosGeek[i].imagem, produtosGeek[i].nome, produtosGeek[i].valor))
  } else {
    listFigure.push(createPaintingItem(produtosGeek[i].imagem, produtosGeek[i].nome, produtosGeek[i].valor))
  }
}

function javaScriptDOO() {
  let secaoListPaintings = document.getElementById("secaoPaintings")
  let secaoListActionFigures = document.getElementById("secaoAction")

  if (listPainting.length > 0) {
    let ul = document.createElement("ul")
    ul.id = "sectionPaintings"

    for (let i = 0; i < listPainting.length; i++) {
      let li = document.createElement("li")
      li.classList.add("paintings")
      let imagem = document.createElement("img")
      let nome = document.createElement("h3")
      let valor = document.createElement("p")
  
      imagem.src = listPainting[i].imagem
      nome.innerText = listPainting[i].nome
      valor.innerText = listPainting[i].valor
  
      ul.appendChild(li)
      li.appendChild(imagem)
      li.appendChild(nome)
      li.appendChild(valor)
  
    }
    secaoListPaintings.append(ul)
  }
  if (listFigure.length > 0) {
    let ul = document.createElement("ul")
    ul.id = "sectionActionFigures"

    for (let i = 0; i < listFigure.length; i++) {
      let li = document.createElement("li")
      li.classList.add("actions")
      let imagem = document.createElement("img")
      let nome = document.createElement("h3")
      let valor = document.createElement("p")
  
      imagem.src = listFigure[i].imagem
      nome.innerText = listFigure[i].nome
      valor.innerText = listFigure[i].valor
  
      ul.appendChild(li)
      li.appendChild(imagem)
      li.appendChild(nome)
      li.appendChild(valor)
  
    }
    secaoListActionFigures.append(ul)
  }
}

javaScriptDOO()
