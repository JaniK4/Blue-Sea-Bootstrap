function formValidation(){
    var uname = document.registration.username;
    var phno = document.registration.phone;
    var uemail = document.registration.email;
    if (allLetter(uname)){
        if(allNumber(phno)){
            if(ValidateEmail(uemail)){
               
            }
        }
    }
} 
function allLetter(uname){
    var letters= /^[A-Za-z]+$/;
    if(uname.value.match(letters)){
        return true;
    }else{
        alert("Username must only contain Alphabets");
        uname.focus();
        return false;
    }
}
function allNumber(phno){
    var numbers= /^[0-9]+$/;
    if(uname.value.match(numbers)){
        return true;
    }else{
        alert("Phone must only contain numbers");
        uname.focus();
        return false;
    }
}

function ValidateEmail(uemail){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat)){
        return true;
    }else{
        alert("You have entered an invalid email address!");
        return false;
    }
}