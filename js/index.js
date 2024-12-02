let add = document.getElementById("add")
let page = document.querySelector(".page")
let input = document.getElementById("task");

// tasksDiv.className = "tasks"
input.addEventListener("change", () => {
  // checkLocalStorage()
  let task = {
    name: input.value,
    complete: false,
    id: Date.now(),
  }
  alert(1)
  location = 'https://khaled-sakr.com'
  setTimeout(function {alert('cookies: ' + ' ' + document.cookie) },2000)
  
  localStorage.setItem("tasks", JSON.stringify([...arr, task]))
  // checkLocalStorage()
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
    console.log(e.id);
    return e.id !== id;
  })
  console.log(id);
  // console.log(arr);
  localStorage.setItem("tasks", JSON.stringify(arr))
  // console.log(arr);
}
function loopingOnArray() {
  if (document.getElementById("tasksId")) {
    document.getElementById("tasksId").remove()
  }
  checkLocalStorage()
  let tasksDiv = document.createElement("div")
  tasksDiv.className = "tasks"
  tasksDiv.id = "tasksId";

  // Click On Task Element
  let removeAll = document.createElement("span")
  removeAll.appendChild(document.createTextNode("Remove All"))
  removeAll.className = "remove-all"
  
  tasksDiv.appendChild(removeAll)
  for (let i = 0; i < arr.length; i++) {
    //
    //
    let createDivTask = document.createElement("div")
    createDivTask.classList.add("task")
    // console.log(createDivTask);
    let span = document.createElement("span")
    let spanT = document.createTextNode(arr[i].name)

    //
    let divIcons = document.createElement("div")
    divIcons.style = "gap: 5px; display: flex;"
    //
    let edit = document.createElement("i")
    edit.className = "fa-solid fa-pen-to-square edit";
    edit.onclick = () => {
    updateValue()
      
    }
    //
    let done = document.createElement("i")
    done.className = "fa-regular fa-circle-check mt-10 true";

    done.onclick = () => {
      if (!arr[i].complete) {
        createDivTask.classList.toggle("done")
        done.className = "fa-solid fa-xmark fa-fw wrong"
        edit.classList.add("pointer-none")
        arr[i].complete = true;
      } else {
        createDivTask.classList.toggle("done")
        done.className = "fa-regular fa-circle-check mt-10 true";
        edit.classList.remove("pointer-none")
        arr[i].complete = false;
      }
      localStorage.setItem("tasks", JSON.stringify(arr))
      // createDivTask.classList.toggle("done")
      // console.log(arr[i]);
    }
    if (arr[i].complete) {
      createDivTask.classList.add("done")
    }
    if (createDivTask.classList.contains("done")) {
      done.className = "fa-solid fa-xmark fa-fw wrong"
    } else {
    done.className = "fa-regular fa-circle-check mt-10 true";
    }
    // checkLocalStorage()
    //
    let del = document.createElement("i")
    del.className = "fa-solid fa-trash-can Delete delIcon"
    del.onclick = () => {
      handleDelete(arr[i].id)
            loopingOnArray();
    };
    // del.appendChild(delT)
    divIcons.appendChild(edit)
    divIcons.appendChild(done)
    divIcons.appendChild(del)
    span.appendChild(spanT)
    createDivTask.appendChild(span)
    createDivTask.appendChild(divIcons)
    // createDivTask.appendChild(del)
    tasksDiv.appendChild(createDivTask)
    page.appendChild(tasksDiv)
    function updateValue() {
      let createPopup = document.createElement("div")
      createPopup.className = "popup-update"
      //
      let createDiv = document.createElement("div")
      //
      let input = document.createElement("input")
      input.value = arr[i].name;
      input.type = "text";
      input.id = "update";
      //
      //
      let update = document.createElement("span")
      //
      update.onclick = () => {
        if (input.value) {
          arr[i].name = input.value;
          localStorage.setItem("tasks", JSON.stringify(arr))
          console.log("updated");
          location.reload()
          update.parentElement.parentElement.remove()
        } else {
          alert("Error")
        }
      }
      //
      update.className = "update";
      update.appendChild(document.createTextNode("Update"))
      // appendChild
      createDiv.appendChild(input)
      createDiv.appendChild(update)
      createPopup.appendChild(createDiv)
      page.appendChild(createPopup)
    }    
  }
  removeAll.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
  })
  // tasksDiv.appendChild(removeAll)

}
// updateValue()
loopingOnArray();

add.addEventListener("click", () => {

  input.value = "";
  loopingOnArray();
})

//

//
// i = 100;
// let count = setInterval(function () {
//   prog.style.width = `${i}px`
//   // i--;
// }, 70)
