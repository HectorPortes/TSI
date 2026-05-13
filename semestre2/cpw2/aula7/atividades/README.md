1) O que significa a sigla DOM?
R: Document Object Model (Modelo de Objeto do Documento)

2) Descreva com suas palavras a analogia da "árvore" para o DOM.
R: <html> é a raiz, <head> e <body> são os primeiros galhos principais, elementos dentro do <body> (como <h1>, <p>, <div>) são galhos menores e folhas, cada parte do documento é um NÓ (Node) nesta árvore. 

3) Dado o HTML: <div><p>Olá</p><span>Mundo</span></div>
▪ Quem é o pai do elemento <p>?
R: <div>
▪ O elemento <span> é filho de quem?
R: <div>
▪ Os elementos <p> e <span> são irmãos?
R: sim

4) Liste 3 tipos de nós que podem existir no DOM.
R: Nós de elemento: tags html (ex: <p>, <div>);
Nós de texto: o conteúdo textual dentro dos elementos;
Nós de Atributo: atributos dos elementos (ex: href em <a>).

5) Por que o JavaScript é importante quando falamos sobre o DOM?
R: Através do objeto document, o JavaScript pode:
◦ Encontrar elementos HTML.
◦ Alterar o conteúdo e os atributos dos elementos.
◦ Modificar estilos CSS.
◦ Adicionar ou remover elementos.
◦ Reagir a eventos (cliques, teclas, etc).

• Considere o HTML:
HTML
<div id="principal">
<h1 class="titulo">Bem-vindo!</h1>
<p class="texto">Este é um parágrafo.</p>
<p class="importante">Este é outro parágrafo.</p>
<ul>
<li>Item A</li>
<li>Item B</li>
</ul>
</div>

6) Escreva o código JavaScript para selecionar o elemento <h1> usando seu ID
(suponha que ele tenha id="cabecalho").
R: let cabecalho = document.getElementById('cabecalho')

7) Como você selecionaria TODOS os elementos <p> dentro da div com
id="principal" usando getElementsByTagName?
R: let todosOsP = document.getElementById('principal').document.getElementByTagName('p')

8) Escreva o código para selecionar apenas o parágrafo que tem AMBAS as
classes "texto" e "importante" usando querySelector.
R: let paragrafo = document.querySelector('p.texto.importante') 

9) Como você selecionaria todos os elementos <li> usando querySelectorAll?
R: let todosOsLi = document.querySelectorAll('li')

10) Qual a principal diferença entre o retorno de getElementsByClassName e
querySelectorAll em termos de serem "ao vivo" ou "estáticos"?
R: O getElementByClassName retorna uma HTMLColletion, que é 'ao vivo', enquanto o querySelectorAll retorna uma NodeList, que é 'estática'