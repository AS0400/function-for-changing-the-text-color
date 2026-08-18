const paragraph = document.querySelectorAll("p");
const button = document.getElementById("colorBtn");
button.addEventListener("click",()=>{
    for(let i=0 ; i<paragraph.length;i++){
        paragraph[i].style.color="blue";
    }
});