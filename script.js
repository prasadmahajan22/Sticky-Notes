let button = document.querySelector("#buttons");
let notes = document.querySelector(".notes");
let p = document.querySelector(".para");
let textarea = document.querySelector("textarea");
let color = document.querySelector("input");
let reset = document.querySelector(".reset");
// let resetbtn = document.querySelector("#resets");
let right_cont = document.querySelector(".right_cont");

button.addEventListener("click" , () => {
    if(textarea.value === ""){
        alert("Enter Some Text");
        return;
    }
    p.style.display = "none";
    let new_div = document.createElement("div");
    let inner_div = document.createElement("div");
    let para = document.createElement("p");
    let cross = document.createElement("button");
    notes.appendChild(new_div).appendChild(inner_div).appendChild(para);
    new_div.appendChild(cross);
    new_div.classList.add("new_divs");
    inner_div.classList.add("inner_div");
    cross.classList.add("cross");
    cross.innerText = "X";
    new_div.style.backgroundColor = color.value;
    para.innerText = textarea.value;
    textarea.value = null;


    if(notes.children.length > 1){
        reset.style.display = "block";
    }

    if(color.value === "#000000"){
        cross.style.color = "white";
        new_div.style.color = "white";
    }
   
});



right_cont.addEventListener("click" , (event) => {
    
    if(event.target.innerText === "X"){
        event.target.parentElement.remove();
    }
    if(event.target.innerText == "Delete all notes"){
        while(notes.children.length !== 1){
            notes.removeChild(notes.lastChild);
       }
    }
    if(notes.children.length === 1){
        p.style.display = "block";
        reset.style.display = "none";
        
    }


});
