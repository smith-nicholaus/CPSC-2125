function validateForm() {
  var x = document.forms["myForm"]["fName"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  x = document.forms["myForm"]["lName"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  x = document.forms["myForm"]["myEmail"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }

  x = document.forms["myForm"]["DOB"].value;
  if (x == "") {
    alert("Date of Birth must be filled out");
    return false;
  }

  x = document.forms["myForm"]["phone"].value;
  if (x == "") {
    alert("Phone Number must be filled out");
    return false;
  }

  x = document.forms["myForm"]["username"].value;
  if (x == "") {
    alert("Username must be filled out");
    return false;
  }

  x = document.forms["myForm"]["password"].value;
  if (x == "") {
    alert("Password must be filled out");
    return false;
  }

  x = document.forms["myForm"]["Reenter Password"].value;
  if (x == "") {
    alert("Password must be Re-entered");
    return false;
  }
}