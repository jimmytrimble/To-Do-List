let addButton = document.getElementById("add")

function addStrikethrough(event){
    element = event.target.parentNode
    element.innerHTML = `<s>${element.innerHTML}</s>`
    element.removeEventListener("click",addStrikethrough)
}

function deleteEntry(event){
    event.target.parentNode.remove()
}

addButton.addEventListener("click", function(){
    if(document.getElementById("input").value){
        let list = document.getElementById("todo")
        let newItem = document.createElement("li")
        let text = document.createTextNode(" " + document.getElementById("input").value)
        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Remove"
        newItem.appendChild(deleteButton)
        newItem.appendChild(text)
        list.appendChild(newItem)
        deleteButton.addEventListener("click",deleteEntry)
        document.getElementById("input").value = ""
    }
})

console.log("My code is running");