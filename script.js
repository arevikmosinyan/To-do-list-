function addingItemsToDoList(){
 let input = document.getElementsByClassName("input")[0];
console.log(input.value)
 let value = input.value.trim();
 if(!value){
     return;//"there is no value inputed"
 }
 let item = document.createElement("li");
 item.innerHTML = value;
 let removingBtn = document.createElement("span");
 removingBtn.innerHTML = "X";
 removingBtn.className = "removedBtn";
 item.append(removingBtn);
 let unorderedList = document.getElementById("unorderedListOfToDo");
 unorderedList.append(item);

 input.value = "" //after adding, clean the input field

}

function onKeyPressToDoList(){
    if(event.key === "Enter"){
        addingItemsToDoList();
    }
}
function onItemPress(){
    let {target} = event;
    if(target.className === "removedBtn"){
        const item = target.parentNode;
        let unorderedList = document.getElementById("unorderedListOfToDo");
        unorderedList.removeChild(item);
        return;

    }
    target.classList.toggle("selected");
}