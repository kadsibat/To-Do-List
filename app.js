let myInput = document.getElementById("input_");
let myButton= document.getElementById("addBtn");
let h1= document.getElementById("tag_");
 let liste = document.getElementById("task-list");
let list=document.querySelector("ul");

 myButton.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.setAttribute("class","li");
    let parentDiv= document.querySelector(`#task-list`);
    let text=document.createTextNode(`${myInput.value}`);
    li.appendChild(text);
    // parentDiv.appendChild(li);

    // let karakter = document.createElement(`li`);
    // karakter.innerHTML= myInput.value;

    // li.innerHTML=`<li>${myInput.value}  <button> <i class="fa-solid fa-xmark"></i>
    // </button>`
    if (myInput.value === '') {
        alert("You must write something!");
      } else {
        document.getElementById("task-list").appendChild(li);
      }
    //   document.getElementById("input_").value = "";


    let close = document.createElement("close")
    close.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    li.appendChild(close);

    close.addEventListener("click",()=>{
        li.remove();
 
});
   
});




// {/* <span id="close"> ✖ </span> */}