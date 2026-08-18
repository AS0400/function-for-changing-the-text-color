const paragraph = document.querySelectorAll("p");
const button = document.getElementById("colorBtn");

button.addEventListener("click",()=>{
    paragraph.forEach((paragraph)=>{
        paragraph.classList.toggle("blue-text");
    });
});