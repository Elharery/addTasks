let inputShow = document.querySelector("input")
let btn = document.querySelector(".add")
// let tass = document.querySelector(".d")

// let tasksSpan = document.querySelector("span")
//
// let a = document.querySelector(".d")
// let deleteB = document.createElement("span")
// deleteB.className = "delete";
// deleteB.textContent = "Delete"
// tass.appendChild(deleteB)
//
// let deleteT = document.querySelector(".delete");
//
// console.log(sa);
let dele = document.querySelector(".delete")
let show = document.querySelector(".add")
btn.onclick = function () {
    if (inputShow.value !== "") {
        let showed = document.querySelector(".box")
        // if (dele.style.display !== "block" && showed.style.display !== "block") {
        //     dele.style.display = "block";
        //     showed.style.display = "block";
        // }
        // dele.addEventListener("click", () => {
        //     showed.style.display = "none";
        //     dele.style.display = "none";
        // })
        let task = document.createElement("div")
        task.className = "task";
        let taskSpan = document.createElement("span")
        let taskSpanText = document.createTextNode(inputShow.value.toLowerCase())
        taskSpan.appendChild(taskSpanText)
        let Delete = document.createElement("button")
        let deleteText = document.createTextNode("Delete")
        
        Delete.className = "del";
        Delete.id = "del";
        Delete.appendChild(deleteText)
        task.appendChild(taskSpan)
        task.appendChild(Delete)
        showed.appendChild(task)
        inputShow.value = "";
        Delete.onclick = () => {
            Delete.parentElement.remove()
        }
    }
    }
console.log(dele);

// document.body.appendChild(task)