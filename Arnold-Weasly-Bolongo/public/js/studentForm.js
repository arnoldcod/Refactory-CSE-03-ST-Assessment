const validation =  (event)=> {
  let error = 0;

let firstName = document.getElementById('firstName'); //for input tag id
let lastName = document.getElementById('lastName'); //for input tag id
let course = document.getElementById('course'); //for input tag id
let entryScheme = document.getElementById('entryScheme'); //for input tag id
let intake = document.getElementById('intake'); //for input tag id
let sponsorship = document.getElementById('sponsorship'); //for input tag id
let gender = document.getElementsByName("gender");
let dob = document.getElementsByName("dob");
let residence = document.getElementById("residence");



let firstNameError = document.getElementById('firstNameError'); //for small tag id
let lastNameError = document.getElementById('lastNameError'); //for small tag id
let courseError = document.getElementById('courseError'); //for small tag id
let entrySchemeError = document.getElementById('entrySchemeError'); //for small tag id
let intakeError = document.getElementById('intakeError'); //for small tag id
let sponsorshipError = document.getElementById('sponsorshipError'); //for small tag id
let genderError = document.getElementById("genderError");
let dobError = document.getElementById("dobError");
let residenceError = document.getElementById("residenceError");




   //first Name validation
  if (firstName.value == "") {
    firstName.style.border = "1px solid red";
    firstNameError.textContent = "Please enter first Name!";
    firstNameError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    firstName.style.border = "1px solid green";
    firstNameError.textContent = "";
  }


    //lastName validation
  if (lastName.value == "") {
    lastName.style.border = "1px solid red";
    lastNameError.textContent = "Please enter Last Name!";
    lastNameError.style = "color: red;";
    error++;
  } else {
    userName.style.border = "1px solid green";
    userName.textContent = " ";
  }


   //course validation
   if (course.value == "") {
    course.style.border = "1px solid red";
    courseError.textContent = "Please Select Course Name!";
    courseError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    course.style.border = "1px solid green";
    courseError.textContent = "";
  }


    //Entry Scheme validation
    if (entryScheme.value == "") {
      entryScheme.style.border = "1px solid red";
      entrySchemeError.textContent = "Please Select entryScheme Name!";
      entrySchemeError.style = "color: red;";
      error++;
      // error = error +1;
    } else {
      entryScheme.style.border = "1px solid green";
      entrySchemeError.textContent = "";
    }


     //Intake validation
     if (intake.value == "") {
      intake.style.border = "1px solid red";
      intakeError.textContent = "Please Select intake Name!";
      intakeError.style = "color: red;";
      error++;
      // error = error +1;
    } else {
      intake.style.border = "1px solid green";
      intakeError.textContent = "";
    }


      //sponsorship validation
      if (sponsorship.value == "") {
        sponsorship.style.border = "1px solid red";
        sponsorshipError.textContent = "Please Select sponsorship Name!";
        sponsorshipError.style = "color: red;";
        error++;
        // error = error +1;
      } else {
        sponsorship.style.border = "1px solid green";
        sponsorshipError.textContent = "";
      }



// Gender buttons validation
if (!formValid) {
  genderError.textContent = "Please select gender";
  genderError.style =
    "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif";
  // return false;
  error++;
} else {
  genderError.textContent = "";
}


 //date of birth validation
 if (dob.value ==  "") {
  dob.style.border = "1px solid red";
  dobError.textContent = "Please enter Date Of Birth!";
  dobError.style = "color: red;";
  error++;
  // error = error +1;
} else {
  dob.style.border = "1px solid green";
  dobError.textContent = "";
}



   //residence validation
   if (residence.value == "") {
    residence.style.border = "1px solid red";
    residenceError.textContent = "Please enter residence!";
    residenceError.style = "color: red;";
    error++;
  } else {
    residence.style.border = "1px solid green";
    residence.textContent = " ";
  }



 if (error > 0) {
  event.preventDefault();
}
}