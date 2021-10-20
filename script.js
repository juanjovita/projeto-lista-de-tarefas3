//VARIÁVEIS
let input = document.getElementById('input-principal')
let button = document.getElementById('add-button')
let task = document.getElementById('nome-tarefa')
let complet_list = document.getElementById('tarefas')
let delButton = document.getElementById('index')
//ARRAYS
let array_tarefa = []

//FUNÇÕES
//Obs: o nome da função n pode ser o mesmo que uma variável

//Adicionar tarefas
function addTask() {
  array_tarefa.push(input.value) //puxar o valor do input

  showTask()

  //criar objeto dentro do array:
  //
  //  array_tarefa.push({
  // task: input.value,
  // finish: false(valor inicial)
  //
  //})
 

}

//Mostrar tarefas
function showTask() {
  let new_li = ""
  array_tarefa.forEach((task, index) => {  //forEach - monta uma li completa e guarda dentro da variável(new_li)
    //pegar tarefa por tarefa
    
    //usar crase(``) p/ poder usar ${} e colocar uma variável
    //variavel(new_li) vai receber um novo valor(${task}) + todo o html
  new_li = new_li + `<li class="item-lista finish"> 
  <button id="rocket-button" onclick="finishTask(${index})">
    <i class="fas fa-rocket"></i>
  </button>

  <p class="nome-tarefa" id="nome-tarefa">${task}</p>

  <button id="del-button" onclick="delTask(${index})">
    <i class="fas fa-trash"></i>
  </button>
</li>`
  })

  complet_list.innerHTML = new_li 

}

//Deletar tarefas
function delTask(index){
  array_tarefa.splice(index, 1) //indicar posição(index) e a quantidade (1)

  showTask()  //pegar os arrays atualizados e mostrar os itens atualizados na tela 

}

//Concluir tarefa
function finishTask(){
  

}


button.addEventListener('click', addTask)
