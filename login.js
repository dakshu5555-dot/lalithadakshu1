let ft= document.getElementById("first")
let sd= document. getElementById("second")
let td= document.getElementById("third")

document.addEventListener("DOMContentLoaded",(event) =>{ 
    
    let auth=localStorage.getItem("auth")
    if(auth=="false"){
        console.log('auth',auth)
        sd.style.display="block"
        ft.style.display="none"
        td.style.display="none"

    } else if(auth=="true"){
     
        ft.style.display="none"
        td.style.display="block"
        sd.style.display="none"
    
    } else if( auth == "null"){
        
        td.style.display="none"
        sd.style.display="none"
        ft.style.display="block"

    }

})


// register Form
let form = document.getElementById("container")
form.addEventListener("submit",function(event){
    event.preventDefault()
let name = document.getElementById("name").value
let age = document.getElementById("age").value
let reg= document.getElementById("reg").value

localStorage.setItem("name",name)
localStorage.setItem("age",age)
localStorage.setItem("reg",reg)

console.log(name,age,reg)

sd.style.display="block"

ft.style.display="none"
localStorage.setItem("auth",false)

})
//login page
let loginform = document.getElementById("containtwo")
loginform.addEventListener("submit",(event) =>{
    event.preventDefault()
    let username= document.getElementById("fun").value
    let password = document.getElementById("fup").value
    let orginalname= localStorage.getItem("name",name)
    let orginalpass= localStorage.getItem("age",age)
    console.log({username,orginalname,password,orginalpass})
  
    if(orginalname==username&&orginalpass==password){

        localStorage.setItem("auth",true)
        sd.style.display="none"
        td.style.display="block"
        
    }
    else{
        document.getElementById("result").textContent="not correct"
    }

    
})

let logout= document.getElementById("logout")

logout.addEventListener('click',function(event){

       event.preventDefault()
       localStorage.setItem("auth",null)
       ft.style.display="block"
       td.style.display="none"
})