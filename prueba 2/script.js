
const api_url= "https://api.agify.io";
function  validateMyForm(){
   
var name= document.getElementById("nombre")
var localizacion= document.getElementById("localizacion")


fetch(`${api_url}?name=${name.value}&country_id${localizacion.value}`)
//esto que hago haga se llama literal string, para que averigues luego
.then(res => res.json())
.then(data=>{
    console.log(data)
    window.localStorage.setItem("Results", JSON.stringify(data))
    mypage();
})
.catch(error=>console.log(error))
 

}
 function mypage() {
    window.location.replace('resultado.html')}