const Clock = document.querySelector(".Clock");
const BoardLow = document.querySelector(".Low");
const BoardMedium = document.querySelector(".Medium");
const BoardHigh = document.querySelector(".High");
let TaskBook = {
  "Low":[],
  "Medium":[],
  "High":[]
};
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
  let buttonDelete = `<button onclick="DeleteTask(TaskBook.${Priority}[${id}])">DELETE</button>`;
  let buttonUpdate = `<button onclick="UpdateTask(TaskBook.${Priority}[${id}])">UPDATE</button>`;
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
function DeleteTask(){

}
function UpdateTask(){

}

NewTask("Low","Esto es un demo..");
NewTask("Low","Esto es un demo..");
NewTask("High","Esto es un demo..");
NewTask("High","Esto es un demo..");
NewTask("High","Esto es un demo..");
NewTask("High","Esto es un demo..");
NewTask("Medium","Esto es un demo..");
console.log(TaskBook);
ReadTasks();