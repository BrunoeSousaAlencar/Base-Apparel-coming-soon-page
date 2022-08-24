document.querySelector('#email').focus();

        form.addEventListener("submit", (e)=>{
            var form = document.querySelector('#form');
            var email = document.querySelector('#email').value;
            var erro = document.querySelector('#erro');
            if(email ==""){
                document.querySelector("#erro").textContent = "pleace provide a valid email"; 
                document.querySelector('#img-erro').style.display = "block"
                e.preventDefault();
            } else{
                document.querySelector("#erro").textContent = "";
                document.querySelector('#img-erro').style.display = "none"
            }
        })
        console.log(email)