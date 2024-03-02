function checkValue(){
    const data = document.getElementById("uname").value
    if(data==""){
        document.getElementById("errorForm").innerHTML = 'error username field is empty';
    }else{
        document.getElementById("errorForm").innerHTML = `Username is ${data}`;
    }
}
/// git status
/// git init
/// git add .
/// git push
/// git fetch
function removeValue(){
    document.getElementById("uname").value = '';
}
window.onload = removeValue();