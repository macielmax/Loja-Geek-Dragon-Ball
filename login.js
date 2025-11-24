
function dados() {

     let ds = [
          { id: 1, login: "Bulma", password: "123", Email: "bulma@gmail.com" }, //0
          { id: 2, login: "Vegeta", password: "1234", Email: "vegeta@gmail.com" }, //1
          { id: 3, login: "kuririn", password: "12345", Email: "rkuririn@gmail.com" } //2
     ]
     let json = JSON.stringify(ds)
     localStorage.setItem("dados", json)

     //return ds

}

function login() {

     const ds = dados()

     let lg = document.querySelector("#email").value
     let ps = document.querySelector("#senha").value

     for (i = 0; i < ds.length; i++) {

          if (lg == ds[i].Email && ps == ds[i].password) {
               alert("bem vindo(a): " + ds[i].login + "\n Seu Email é: " + lg + "\n sua senha é: " + ps)
               console.log("logado!" + ds[i].login)
          }

     }

}











