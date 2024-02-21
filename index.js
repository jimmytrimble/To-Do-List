let addButton = document.getElementById("add")

let count = 0;

/*/function addStrikethrough(id){
    element = document.getElementById(id)
    element.innerHTML = `<s>${element.innerHTML}</s>`
}/*/

addButton.addEventListener("click", function(){
    if(document.getElementById("input").value){
        count++
        let list = document.getElementById("todo")
        let newItem = document.createElement("li")
        newItem.innerHTML = document.getElementById("input").value
        newItem.setAttribute("id",count.toString())
        list.appendChild(newItem)
        document.getElementById("input").value = ""
    }
})

console.log("My code is running");