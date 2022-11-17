const Clock = document.querySelector(".Clock");
const BoardLow = document.querySelector(".Low");
const BoardMedium = document.querySelector(".Medium");
const BoardHigh = document.querySelector(".High");
let TaskBook = {
  "Low":[],
  "Medium":[],
  "High":[]
};
let PriorityValue = 'High';
function GetTime() {
  let time = new Date();
  return `${time.getFullYear()}  ${time.getMonth()}  ${time.getDate()}  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}
setInterval(() => {
  Clock.innerHTML = GetTime();
}, 1000);
function Task(Priority,id,Description,Date){
  let label = `<h4>${id}</h4>`;
  let content = `<p>${Description}</p>`;
  let dateLabel = `<time>${Date}</time>`;
  let buttonDelete = `<button onclick="DeleteTask(TaskBook.${Priority},${id})"><i class="fas fa-trash-alt"></i></button>`;
  let buttonUpdate = `<button onclick="UpdateTask(TaskBook.${Priority},${id})"><i class="fas fa-pencil-alt"></i></button>`;
  return `<div class="Task">${label}${content}${dateLabel}${buttonUpdate}${buttonDelete}</div>`
}
function NewTask(Priority,Description){
  let task = {
    "Description":Description,
    "Date":GetTime()
  };
  TaskBook[Priority].push(task);
}
function ReadTasks(){
  BoardLow.innerHTML =`<h3>Low Priority</h3>${ReadBoard(TaskBook.Low,"Low")}`;
  BoardMedium.innerHTML = `<h3>Medium Priority</h3>${ReadBoard(TaskBook.Medium,"Medium")}`;
  BoardHigh.innerHTML = `<h3>High Priority</h3>${ReadBoard(TaskBook.High,"High")}`;
}
function ReadBoard(TasksList,Priority){
  let Tasks ='';
  for (let a = 0; a < TasksList.length; a++) {
    Tasks = Tasks + Task(Priority,a,TasksList[a].Description,TasksList[a].Date);
  }
  return  Tasks;
}
function DeleteTask(Tasks,id){
  let result = confirm("Eliminar Tarea") ? Tasks.splice(id,1) : console.log("Tarea No Eliminada") ;
  // Tasks.splice(id,1);
  ReadTasks();
}
function UpdateTask(Tasks,id){
  let NewDescription = prompt("Introduce nuevo text");
  Tasks[id].Description = NewDescription;
  ReadTasks();
}
function GetTask(){
  let NewDescription = document.getElementById('NewDescription').value;
  console.log(PriorityValue+"-"+NewDescription);
  NewTask(PriorityValue.toString(),NewDescription.toString());
  ReadTasks();
}
function RadioButtonValue(value){
  PriorityValue = value;
}
NewTask("Low","Esto es un demo..");
NewTask("Low","Esto es un demo..");
NewTask("High","Esto es un demo..");
NewTask("High","Esto es un demo..");
NewTask("High","Esto es un demo..");
NewTask("High","Esto es un demo..");
NewTask("Medium","Esto es un demo..");
ReadTasks();