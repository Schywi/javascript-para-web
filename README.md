
## Funcionalidades desenvolvidas : 

`should be able to search a paciente `: A aplicação deve permitir que a informação de um paciente seja buscada do formulario, e retorne os dados para o calculo do imc. 

`should be able to calcule and validate the IMC`: A aplicação deve calcular e validar o IMC do paciente a partir dos valores recebidos e replicar este calculo para todos os pacientes usando um operador logico.

`should be able to listen an event and add a new pacient`: A aplicação deve ouvir um evento e permitir que um novo paciente seja adicionado.

` should be able to prevent default event `: A aplicação deve impedir que o formulario seja enviado e a pagina recarregada. 

` should have a function for each responsability`: A aplicação deve possuir funções que executem  e automatizem as  responsabilidades permitindo um código mais limpo. 

`should not be able to create a pacient that doesn't exist`: A aplicação deve impedir a criação de um paciente em branco (sem dados).

`should be able to validate the data formulary`: A aplicação deve impedir que um paciente seja adicionado caso algum campo do formulario não tenha sido preenchido e informar ao usuario quais campos não foram preenchidos. 

`should be able to remove a pacient`: A aplicação deve permitir a remoção de um paciente ao clicar diretamente em sua linha.

` should be able to filter a pacient`: A aplicação deve permitir filtrar a busca pelo paciente ao digitar algum dado do usuario como nome,peso ou altura.  `Dica: use o conceito de expressão regular `

`should be able to connect with a external server`: A aplicação deve permitir e tratar os dados da conexão com a url: ` api-pacientes.herokuapp.com/pacientes`, que armazena dados de outros pacientes.
`Dica: use os conceitos de AJAX. `

`should be able to validate the connection with a external server`: A aplicação deve validar e informar ao usuario caso  a conexão com o servidor não tenha sido bem sucedida.

## Conceitos abordados 

### Funções aprendidas

.querySelector("tag") : Seleciona uma tag dentro do html.
.querySelectorAll():  Seleciona todos os idenfiticadores com a classe dada, 
retorna um array com os elementos do HTML. 

console.log(): Serve para visualizarmos o log de funções,variaveis da nossa aplicação.

addEventListener: Adiciona um "escutador" de eventos, que nos permite "capturar" uma ação do usuario e executar uma função quando essa ação for feita. 
Ex: `.addEventListener("evento", function(){})`


preventDefault(): Impede que uma configuração padrão ocorra,
no exemplo abaixo usamos ela para prevenir que a pagina seja carregada. 
Ex: `event.preventDefault()`

.appendChild(): Adiciona uma tag ou conteudo dentro de outro.
Ex: `pacientes.appendChild(pacienteTr)`

.reset(): Reinicializa algo , no exemplo abaixo foi utilizado para zerar o conteudo do formulario ao recarregar a pagina ou adicionar um novo paciente. 
Ex: `form.reset()`

document. : Nós permite acessar o "mundo HTMl" apartir do "mundo Javascript".
document.createElement() : Cria um elemento HTML como tags , apartir de um arquivo Javascript.

.innerHTML: permite que você controle o html interno  de um elemento
, com essa propriedade podemos facilmente trocar todo o conteúdo de um elemento. 

.textContent: Server para extrair o conteudo de uma tag.

.forEach(function() {}): Executa uma função para cada item do array , devemos passar o item como parametro. 

Ex:
```
    const erros =[]

    erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }
```
.remove(): Remove uma informação do html.

**OBS:** Para se acessar o dono do evento (quem sofreu o evento) ; usa-se "this" : significa  "a quem o evento esta atrelado".


### Event bublling (borbulhamento de eventos):

O elemento pai  também escuta a ação do elemento filho, por exemplo a tag <tbody> ouve o evento da tag <tr>. 

Utilidade: Caso precise executar algo para cada elemento filho,  e mais eficiente delegar essa ação (função) ao pai . 

Parâmetro event: È um objeto que tem a propriedade que retorna quem foi clicado.

.target: Especifica quem sofreu a ação.

Ex: `event.target `: Diz quem de fato foi clicado.

#### Diferença entre o "this" e o "event.target" : 

this : È o dono do evento.
event.target: Mostra quem sofreu o evento.

.parentNode() : Seleciona  o pai do elemento. 

Ex: `event.target.parentNode()  ` : Seleciona o pai do alvo  que sofrerá a ação.

.callback: È um nome especial dado a qualquer função que é executada em resposta a um evento qualquer.

.classList : Lista as classes.

.classList.add() : Adiciona uma classe (CSS eu acho) a algo .

.setTimeout(function() {}, tempo(ms)): O javascript  executa algo dps de certo tempo ,  ele "segura" a execução durante um certo tempo.


## Noções de css: 

opacity : Adiciona opacidade.
transition: Adiciona o tempo para ocorrer algo , uma transição de opacidade por exemplo.


### Filtrando os pacientes da tabela: 

#### Noções de html: 

input: Cria um espaço digitavel para se inserir informações.
label:  Serve para dizer o nome do input (qual sua função/ para que serve).

placeholder: Permite que adicione um texto dentro do input  para 
informar ao usuario para que serve aquele input , esse texto
sairá do input quando for digitado algo nele.

 **OBS:** Para capturar algo que o usuario digita usamos o input de dados: 

#### Tipos de eventos estudados: 

click : Evento ao clicar uma vez.
dblclick: Evento ao dar dois cliques.
input: Evento ao escrever algo , ativa para cada letra que vc digita
Ex: `.addEventListener("input", function() {})`

load: Evento caracteristico do XHR(XMLH) que escuta quando a resposta foi carregada:
Ex: `.addEventListener("load",function(){}) ` 


#### Noções de array : 

array[i] : i = indice ou id do elemento do array


Expressão regular : Tipo especial de texto que nos permite buscar um texto (palavra ou letra) dentro de um texto grande.

### Criando expressão regular: 

` var expressão new RegExp(this.value , "i") `, 

A função aceita 2 parametros: 

1) È o que você quer que ela busque ,
2) Diz como vc quer que ela busque ( aqui decidimos se escolhemos case sensitive ou insensitive para considerar ou não as letras maisculas) colocamos "i" que indica case insensitive.

Para usar pedimos para a expressão regular testar a validação 
`expressao.test()`


### Introdução ao AJAX

XMLHttpRequest() : È um  objeto do javascript responsavel por fazer requisições HTTP

.open("requisição" , "endereço"): Abre a conexão com o endereço http ou local que agente queremos acessar.

.send(): Envia a nossa requisição.

.responseText:  Imprime o texto da resposta da requisição

typeof: Operador que retorna o tipo de algo.
Ex: `tipeof resposta`

JSON.parse(): Lê o parametro e devolve um objeto JS. 

AJAX: Requisição com JS de modo assincrono , por que ele não para
o fluxo da requisição. Devemos valida-lo para informar caso o ajax funcione.  

