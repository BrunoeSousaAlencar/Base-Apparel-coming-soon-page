const form = document.querySelector("#form")
const email = document.querySelector('#email').value;

document.querySelector('#email').focus();

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(email === ""){
        document.querySelector(".erro").textContent =''
    }else{
        document.querySelector(".erro").textContent ='erro'
        e.preventDefault();
    }
})

console.log(document.querySelector('#email').value)