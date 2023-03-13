let dor = document.getElementById("dor");
 // validation date of registration;

 let today = new Date();
 let dd = String(today.getDate()).padStart(2, "0");
 let mm = String(today.getMonth()+1).padStart(2,"0");
 let yyyy = today.getFullYear();
 let defaultDate = yyyy + '-' + mm + '-' + dd;

 console.log(`Default Date: ${defaultDate}`);
 dor.defaultValue = defaultDate;


 





const validation = (event) => {
   
    let error = 0;
    // picking input
    let fullName = document.getElementById("fullName")
    let email = document.getElementById("email");
    
    let dob = document.getElementById("dob");
    let nin = document.getElementById("nin");
    let unique = document.getElementById('unique');
    let gmale = document.getElementById("gmale");
    let gfemale = document.getElementById("gfemale");
    let ward = document.getElementById("ward");
    let password = document.getElementById("password");
    let repassword = document.getElementById("repassword");

    // picking input error

    let fnameErr = document.getElementById("fnameErr");
    let emailErr = document.getElementById("emailErr");
   
    let dobErr = document.getElementById("dobErr");
    let ninErr = document.getElementById("ninErr");
    let uniqueErr = document.getElementById('uniqueErr');
    let gmaleErr = document.getElementById("gmaleErr");
    let gfemaleErr = document.getElementById("gfemaleErr");
    let wardErr = document.getElementById("wardErr");
    let passwordErr = document.getElementById("passwordErr");
    let repasswordErr = document.getElementById("repasswordErr");

    // validation of fullname
    if(fullName.value == ""){
        fullName.style.border = "1px solid red";
        fnameErr.innerHTML ="Please input your FullName";
        fnameErr.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!/^[a-zA-Z\s]+$/.test(fullName.value)) {
        fullName.style.border = "1px solid red";
        fnameErr.innerHTML ="Please input vaild name ";
        fnameErr.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++;
    }
    else if(fullName.value.length < 5){
        fullName.style.border = "1px solid red";
        fnameErr.innerHTML ="Please the full name must be atleast 5 letters";
        fnameErr.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if(fullName.value.length > 50){
        fullName.style.border = "1px solid red";
        fnameErr.innerHTML ="Please the full name should not exceed 50 letters";
        fnameErr.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else{
        fullName.style.border = "1px solid green";
        fullName.innerHTML = "";
    }


    // validation of email
    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(email.value == ""){
        email.style.border = "1px solid red";
        emailErr.textContent="Email is required";
        emailErr.style="color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;"
        error++
    }
    else if(!email.value.match(emailregex)){
        email.style.border = "1px solid red";
        emailErr.textContent = "please input correct email";
        emailErr.style="color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;"
        error++
    }else{
        email.style.border = " 1px solid green" ;
        emailErr.textContent=""
    }


    //validation of date of birth
    
        let dobValue = dob.value;
        let dobDate = new Date(dobValue);
        //calculating user age

        let ageDiff = Date.now() - dobDate.getTime();
        let ageDate = new Date(ageDiff);
        let age = Math.abs(ageDate.getUTCFullYear() - 1970)

        if( age < 10 ){
            event.preventDefault();
            dob.style.border = "1px solid red";
            dobErr.textContent = "User must be more than ten year old ";
            dobErr.style="color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;"
            error++
        }

    
    //validation of nin


   


    if(error > 0){
        event.preventDefault()
    }
   

}