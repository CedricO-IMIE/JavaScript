function validateEmail(emailField){
var email;
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  email = document.getElementById("emailField").value;

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(emailField.value) == false) 
            {
            document.getElementById("demo").style.color = "red";
                document.getElementById("demo").innerHTML ="Email Invalide";
                return false;
            } else{
            document.getElementById("demo").style.color = "DarkGreen";      
            document.getElementById("demo").innerHTML ="Email Valide";
			return true;
            }
    }
function Emailvalid(validateEmail){
	if (validateEmail.value == false){
		return "twFermer()";
	}
	return "click";	

}