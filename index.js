let addButton = document.getElementById("add")
let input = document.getElementById("input")

function addStrikethrough(event){
    element = event.target
    element.innerHTML = `<s>${element.innerHTML}</s>`
    element.removeEventListener("click",addStrikethrough)
}

function deleteEntry(event){
    event.target.parentNode.remove()
}

addButton.addEventListener("click", function(){
    if(input.value){
        let list = document.getElementById("todo")
        let newItem = document.createElement("li")
        let text = document.createElement("span")
        text.innerHTML = input.value
        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Remove"
        deleteButton.setAttribute("class","delete")
        newItem.appendChild(deleteButton)
        newItem.appendChild(text)
        list.appendChild(newItem)
        deleteButton.addEventListener("click",deleteEntry)
        text.addEventListener("click",addStrikethrough)
        input.value = ""
    }
})

input.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        addButton.click()
    }
})