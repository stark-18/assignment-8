function validateForm() {
    // get form inputs
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    // validate name
    if(firstName==""||lastName=="")
    {
    //     alert("Name cannot be empty");
    // return false;
    document.getElementById("error-message").innerHTML = "*Name cannot be empty";
    return false;
    }
    else{
        console.log(firstName)
        console.log(lastName)
    }

    // validat phone
    var phoneno = /^\d{10}$/;
        if(!phone.match(phoneno))
        {
        //     alert("Please enter a valid phone number");
        // return false;
        document.getElementById("error-message").innerHTML = "*Please enter a valid phone number";
    return false;
      
        }
      else
        {
            console.log(phone)
        
        }


        //validate email
        if (!email.match((/^[^\s@]+@[^\s@]+\.[^\s@]+$/))) {
            // alert("Please enter a valid email address");
            // return false;
        document.getElementById("error-message").innerHTML = "*Please enter a valid email address";
        return false;
        }
        else{
            console.log(email)
        }

        //validate Password
        
        if(!password.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/))
        {
            // alert("Password must be at least 8 characters long and contain at least one uppercase letter and one numeric digit");
            // return false;
            document.getElementById("error-message").innerHTML = "*Password must be at least 8 characters long and contain at least one uppercase letter and one numeric digit";
        return false;

        }
        else{
            console.log(password)
        }
        //checkbox
        if (!terms) {
            document.getElementById("error-message").innerHTML = "Please agree to the given Terms and Conditions";
            // alert("Please agree to the given Terms and Conditions")
            return false;
        }
        else {
            console.log(terms)
        }
              
         
}
         const button= document.getElementById("submit")
         button.addEventListener("click",validateForm)
