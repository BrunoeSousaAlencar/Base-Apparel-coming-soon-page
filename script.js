document.querySelector('#email').focus();

        form.addEventListener("submit", (e)=>{
            var form = document.querySelector('#form');
            var email = document.querySelector('#email').value;
            var erro = document.querySelector('#erro');
            if(email ==""){
                document.querySelector("#erro").textContent = "pleace provide a valid email"; 
                document.querySelector('#img-erro').style.display = "block"
                document.querySelector('#email').style.border = "1.5px solid var(--Soft-Red)";
                e.preventDefault();

            } else{
                document.querySelector("#erro").textContent = "";
                document.querySelector('#img-erro').style.display = "none"
                document.querySelector('#email').style.border = "1px solid var(--color2)";
            }
        })
        console.log(email)