var results = JSON.parse(window.localStorage.getItem("Results"))
var container = document.getElementById("tr")
container.innerText = `
        <td>${results.name}</td>
        <td>${results.age}</td>
        <td>${results.localizacion}</td>
` ;
console.log(results.name.value)


