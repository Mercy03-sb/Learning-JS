let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault(); // Default operation is prevented (action waala submit ke baad action waale url pe nahi jaayega)
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);
})