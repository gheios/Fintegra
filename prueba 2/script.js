
const api_url= "https://api.agify.io?name=''";
fetch(api_url)
.then(res =>res.json())
.then(data=>{
  let element= document.getElementById('elem')
 
 element.addEventListener('submit',function(e){
     e.preventDefault();
    
     let dat =new FormData(element) 
     console.log(element)
 }
     )
}
)

.catch(err=>console.log(err))