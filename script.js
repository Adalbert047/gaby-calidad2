function getForm(){

    const user = document.querySelector("#user")
    const password = document.querySelector("#password")

    if(user.value.trim()=== "" || password.value.trim() === ""){
        alert("Complete los campos")
        return; 
    }

    const data = {
        user:  user.value,
        password:  password.value
    }

    connectApi(data)
}

function connectApi(data){
    const p= document.querySelector("#message")
    const btn = document.querySelector("#btn")
    btn.style.display = "none"
    p.textContent = "Comprobando datos"
    p.style.color = "black" 


    fetch("https://dummyjson.com/auth/login",
    {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "username" : data.user,
            "password": data.password
        })
    })
    .then(response => response.json())
    .then((e)=>{
        if(!e?.token){
            setTimeout(() => {
                p.style.color = "red"
                p.textContent = "Usuario o contraseña incorrectos, vuelva a intentarlo"
              
                btn.style.display = "inline-block"
            }, 3000); 

            return
        }
        else{
            location.href = "https://google.com"
        }
        console.log(e)
    })
    .catch(err => {
        console.log(err)
    })
}

