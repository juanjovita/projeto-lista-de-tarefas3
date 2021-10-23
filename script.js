//VARIÁVEIS
let input = document.getElementById('input-principal')
let button = document.getElementById('add-button')
let task = document.getElementById('nome-tarefa')
let complet_list = document.getElementById('tarefas')
let delButton = document.getElementById('index')
//ARRAYS
let array_tarefa = []

reloadTask()

//FUNÇÕES
//Obs: o nome da função n pode ser o mesmo que uma variável

//Adicionar tarefas
function addTask() {
  array_tarefa.push({  //criar objeto dentro do array
    task: input.value, //puxar o valor do input
    finish: false
  
  }) 
  
  showTask()

}

//Mostrar tarefas
function showTask() {
  let new_li = ""
  array_tarefa.forEach((task, index) => {  //forEach - monta uma li completa e guarda dentro da variável(new_li)
    //pegar tarefa por tarefa
    
    //usar crase(``) p/ poder usar ${} e colocar uma variável
    //variavel(new_li) vai receber um novo valor(${task}) + todo o html
  new_li = new_li + `<li class="item-lista ${ task.finish == true ? "finish" : "" }"> 
  <button id="rocket-button" onclick="finishTask(${index})">
    <i class="fas fa-rocket"></i>
  </button>
  <p class="nome-tarefa ${ task.finish == true ? "finish" : "" }" id="nome-tarefa">${task.task}</p>
  <button id="del-button" onclick="delTask(${index})">
    <i class="fas fa-trash"></i>
  </button>
</li>`
  })

  complet_list.innerHTML = new_li 

  localStorage.setItem("list", JSON.stringify(array_tarefa))

}

//Deletar tarefas
function delTask(index){
  array_tarefa.splice(index, 1) //indicar posição(index) e a quantidade (1)

  showTask()  //pegar os arrays atualizados e mostrar os itens atualizados na tela 

}

//Concluir tarefa
function finishTask(index){
  array_tarefa[index].finish =! array_tarefa[index].finish  //acessar a posição do array e inverter o valor(true or false)
  //array_tarefa[index].finish = true //acessar a posição(index) do array e trasnformando em true
  console.log(array_tarefa)

  showTask()
}

function reloadTask(){
  let my_task = localStorage.getItem("list")

  if(my_task){
    array_tarefa = JSON.parse(my_task)

  showTask()
  }

}


button.addEventListener('click', addTask)