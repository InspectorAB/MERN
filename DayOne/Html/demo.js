function checkValue(){
    const data = document.getElementById("uname").value
    if(data==""){
        document.getElementById("errorForm").innerHTML = 'error username field is empty';
    }else{
        document.getElementById("errorForm").innerHTML = `Username is ${data}`;
    }
}

function removeValue(){
    document.getElementById("uname").value = '';
}
window.onload = removeValue();