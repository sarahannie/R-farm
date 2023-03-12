const validation = (event) => {
   
    let error = 0;
    // picking input
    let fullName = document.getElementById("fullName")
    let email = document.getElementById("email");
    let dor = document.getElementById("dor");
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
    let dorErr = document.getElementById("dorErr");
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


    //


    if(error > 0){
        event.preventDefault()
    }
   

}