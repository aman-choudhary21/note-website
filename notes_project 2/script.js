const notesContainer = document.querySelector( ".notes-container");
const createBtn = document.querySelector( ".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click",()=>{
    let inputbox= document.createElement("p")
    let img =document.createElement("IMG");
    inputbox.className="input-box";
    inputbox.setAttribute('contenteditable' ,'true' )
    img.src="delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
    }
})