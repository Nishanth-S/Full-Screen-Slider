let wrapper = document.querySelector(".wrapper");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let leftButton = document.querySelector(".left-button");
let rightButton = document.querySelector(".right-button");

// Adding and removing width extension class
left.addEventListener("mouseenter",()=>{
    wrapper.classList.add("hover-left");
});

left.addEventListener("mouseleave",()=>{
    wrapper.classList.remove("hover-left");
});

right.addEventListener("mouseenter",()=>{
    wrapper.classList.add("hover-right");
});

right.addEventListener("mouseleave",()=>{
    wrapper.classList.remove("hover-right");
});

// Changing the text inside button
leftButton.addEventListener("click",()=>{
    leftButton.textContent = "Valar Dohaeris";
    setTimeout(()=>{
        leftButton.textContent = "Valar Morghulis"
    },3500);
})

rightButton.addEventListener("click", ()=>{
    rightButton.textContent = "Joey Loves You!"
    setTimeout(()=>{
        rightButton.textContent = "How You Doing!"
    },3500);
})