//  const openTab = window.open("https://www.w3schools.com","w3schools", "width=200,height=200,left=700,top=200");

//  openTab.close();
// openTab.resizeTo(500, 500);

// const clickable = document.getElementById("clickable");

// const clickable = document.getElementById("clickable");


// clickable.onclick = eventHandler;
// clickable.onmouseover = eventHandler;


// function handleClick(){
//     alert("You clicked me!");
// }
// clickable.addEventListener("click", handleClick);

// const title = document.getElementById("title");

// clickable.addEventListener("click", function(event){
//     console.log(event.type);
//     // console.log(event.target);
//     // event.target.classList.add("title-style");
//     title.classList.add("title-style");

// });


// function eventHandler(event){
//     // console.log(`Event type: ${event.type}`);
//     if(event.type === "click"){
//         console.log("You clicked me!");
//     } else if(event.type === "mouseover"){
//         console.log("You hovered over me!");
//     }
// }

// clickable.addEventListener("click", eventHandler)
// clickable.addEventListener("mouseover", eventHandler)



const registerForm = document.getElementById("register");

const usersList = document.getElementById("users");
const nameerror = document.getElementById("name-error");

registerForm.addEventListener("submit", function(event){
    event.preventDefault();
    // console.log(event.target.name.value);
    if (event.target.name.value.length < 3){
        nameerror.style.display = "block";
        return;
    } else {
        nameerror.style.display = "none";
    }

    usersList.innerHTML += `<li>${event.target.name.value}</li>`;
})