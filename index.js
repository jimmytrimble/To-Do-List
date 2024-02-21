let addButton = document.getElementById("add")
addButton.addEventListener("click", function(){
        if(document.getElementById("input").value){
        let list = document.getElementById("todo")
        let newItem = document.createElement("li")
        newItem.innerHTML = document.getElementById("input").value
        list.appendChild(newItem)
        document.getElementById("input").value = ""
    }
})

console.log("My code is running");