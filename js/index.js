let add = document.getElementById("add")
let page = document.querySelector(".page")
let input = document.getElementById("task");


input.addEventListener("change", () => {
  checkLocalStorage()
  let task = {
    name: input.value,
    complete: false,
    id: Date.now(),
  }
  localStorage.setItem("tasks", JSON.stringify([...arr, task]))
  checkLocalStorage()
})
let arr = [];


  // window.localStorage.setItem("tasks" , JSON.stringify([{
  //   name: "Phone",
  //   complete: false,
  // }]))

function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem("tasks"))) {
    arr = [...JSON.parse(localStorage.getItem("tasks"))]
  }
}

function handleDelete(id) {
  let arr = JSON.parse(localStorage.getItem("tasks"));
  arr = arr.filter(e => {
    return e.id !== id;
  })
  localStorage.setItem("tasks", JSON.stringify(arr))
}


function loopingOnArray() {
  if (document.getElementById("tasksId")) {
    document.getElementById("tasksId").remove()
  }
  checkLocalStorage()
  let tasksDiv = document.createElement("div")
  tasksDiv.className = "tasks"
  tasksDiv.id = "tasksId";
  for (let i = 0; i < arr.length; i++) {
    let createDivTask = document.createElement("div")
    createDivTask.classList.add("task")
    if (arr[i].complete) {
      createDivTask.classList.add("complete")
    }
    let span = document.createElement("span")
    let spanT = document.createTextNode(arr[i].name)
    //
    let del = document.createElement("button")
    let delT = document.createTextNode("Delete")
    //
    del.onclick = () => {
      handleDelete(arr[i].id);
      loopingOnArray();
    }
    del.appendChild(delT)
    span.appendChild(spanT)
    createDivTask.appendChild(span)
    createDivTask.appendChild(del)
    tasksDiv.appendChild(createDivTask)
    page.appendChild(tasksDiv)
  }
}
loopingOnArray();

add.addEventListener("click", () => {

  input.value = "";
  loopingOnArray();
})


