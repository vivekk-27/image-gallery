let images=document.querySelectorAll(".image");
let sections=document.querySelectorAll("section");

images.forEach((image)=>{
    addEventListener("click", enlarge);
});

function enlarge(e){
    removeActive();
    e.target.classList.add("active");
}

function removeActive(){
    sections.forEach((section)=>

        section.classList.remove("active"));
}