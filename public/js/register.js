function validate(){
    let name=document.getElementById("name").value;
    let email= document.getElementById("mail").value;
    let pwd=document.getElementById("pwd").value;
    let confirmpwd=document.getElementById("cpwd").value;
    let address=document.getElementById("address").value;
    let city=document.getElementById("city").value;
    let zip=document.getElementById("zip").value;
    let state= document.getElementById("state").value;
   

    console.log(state);
    console.log(pwd);
    if (name =="" ||email =="" || pwd =="" || address == "" || city == "" 
    || zip =="" || state == "Choose..." )
    {
    alert("Please enter the required fields");
    return false;
    }
    else{
        let pwdValid = validatePassword(pwd,confirmpwd);
        if (pwdValid == true)
        {
            let zipValid = validateZipcode(zip);
            if (zipValid == true)
            {
                let mailValid =  validateEmail(email);
                if (mailValid == true)
                {
                        return true
                }
                else
                {
                        return false;
                }
            }
            else
            {
                return false;
            }
        }
        else
        {
           return false; 
        }
    }

   }

   function validateZipcode(zip){
        let regexp=/^([0-9-]+)$/;
        if (regexp.test(zip))
        {
            console.log("passed zip code validation");
            return true;
        }
        else
        {
            alert(`${zip} is not a valid Zip Code`);
            console.log("Failed zip code validation");
            return false;
        }

   }
function validateEmail(email){

    
    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,4})(.[a-z]{2,4})?$/
    
        
        if(regexp.test(email))
        {
            console.log("Passed email check");
            return true;
    
        }
        else
        {
            console.log(`Failed email check for ${email}`);
            alert(`${email} is not a valid email ID`)
            return false;
        }
    
    }
    
     function validatePassword(pwd,cpwd){
        if (pwd.length < 8)  
        {
            alert("Minimum password length is 8.");
            return false;
        }
        else if(pwd.trim() != cpwd.trim()){
            alert("Passwords donot match");
            return false;
        }
        else 
        {
            return true;
        }
    }