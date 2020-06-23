// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   const form = document.querySelector("#create-task-form")
//   form.addEventListener("submit", addInput)
//   // console.dir(form)
// });

// function addInput(e){
//   event.preventDefault();
//   const input = e.target
//   console.log(input)
// }

document.addEventListener("DOMContentLoaded", () => {  
  const form = document.querySelector("#create-task-form")  
  const button = document.querySelector("input[type='submit']") 

  // const task = document.getElementById("tasks")

  // task.addEventListener("click", function(e){
  //   e.target.remove()
  //   //console.log(e.target.parentElement)
  // })
  //const taskBox = document.getElementById("tasks")  
  form.addEventListener("submit", addInput)  
  //const taskBox = document.getElementById("tasks")  
  //console.dir(form)
});

  function addInput(event){  event.preventDefault();  
    const userInput = event.target.newTaskDescription.value  
    const taskItem = document.createElement("li")
    taskItem.innerText = userInput
    
    const taskBox = document.getElementById("tasks") 
    if (!userInput == ''){  
      taskBox.appendChild(taskItem)
    }
    //console.log(taskBox.innerHTML)  
    // if (!userInput == ''){    
    //   taskBox.innerHTML += `<li>${userInput}<button>x</button></li>`  
    // }  
    //taskBox.innerHTML += `<li>${userInput}</li>`
  }