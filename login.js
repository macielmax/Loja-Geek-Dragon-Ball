
function dados() {

     let ds = [
                {id:1, login:"Bulma",password:"123", Email:"bulma@gmail.com"}, //0
                {id:2, login:"Vegeta", password:"1234", Email:"vegeta@gmail.com"}, //1
                {id:3, login:"Kuririn", password:"12345", Email:"kuririn@gmail.com"} //2
              ]
        return ds

}

function login() {

     const ds = dados()

    let lg = document.querySelector("#email").value
    let ps = document.querySelector("#senha").value

    for (i = 0; i < ds.length; i++) {

    if (lg == ds[i].Email && ps == ds[i].password) {
         alert("Bem vindo(a): " + ds[i].login + "\nSeu e-mail é: " + lg + "\nSua senha é: " +ps)
        console.log("logado!" + ds[i].login)
    } 

    }

}











