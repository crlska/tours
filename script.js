const date = new Date(); 
  const dayOfMonth = date.getDate(); 

  if (dayOfMonth === 31) {
document.getElementById("viernes").style.display = "block";
  }  else  {

    document.getElementById("viernes").style.display = "none";
  }


  if (dayOfMonth === 1) {
document.getElementById("sabado").style.display = "block";
  }  else  {

    document.getElementById("sabado").style.display = "none";
  }


  if (dayOfMonth === 2) {
document.getElementById("domingo").style.display = "block";
  }  else  {

    document.getElementById("domingo").style.display = "none";
  }