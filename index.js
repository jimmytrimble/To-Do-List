let addButton = document.getElementById("add")

let count = 0;

function addStrikethrough(event){
    element = event.target
    element.innerHTML = `<s>${element.innerHTML}</s>`
    element.removeEventListener("click",addStrikethrough)
}

addButton.addEventListener("click", function(){
    if(document.getElementById("input").value){
        count++
        let list = document.getElementById("todo")
        let newItem = document.createElement("li")
        newItem.innerHTML = document.getElementById("input").value
        newItem.setAttribute("id",count.toString())
        list.appendChild(newItem)
        newItem.addEventListener("click",addStrikethrough)
        document.getElementById("input").value = ""
    }
})

console.log("My code is running");