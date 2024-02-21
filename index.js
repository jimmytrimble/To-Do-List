let addButton = document.getElementById("add")

function addStrikethrough(event){
    element = event.target
    element.innerHTML = `<s>${element.innerHTML}</s>`
    element.removeEventListener("click",addStrikethrough)
}

addButton.addEventListener("click", function(){
    if(document.getElementById("input").value){
        let list = document.getElementById("todo")
        let newItem = document.createElement("li")
        newItem.innerHTML = document.getElementById("input").value
        list.appendChild(newItem)
        newItem.addEventListener("click",addStrikethrough)
        document.getElementById("input").value = ""
    }
})

console.log("My code is running");

