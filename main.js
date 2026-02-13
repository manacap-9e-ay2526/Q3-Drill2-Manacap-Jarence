//function Radius

function radius(){
    let value1 = document.getElementById("Number1").value
    let value2 = Math.PI * value1**2
    document.getElementById("Number2").value=value2 .toFixed(2)

}