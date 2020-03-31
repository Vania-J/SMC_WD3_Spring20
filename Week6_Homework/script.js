function addressFunction() 
{ 
  if (document.getElementById('same-address').checked) 
  { 
    document.getElementById('SfirstName').value=document. 
             getElementById('BfirstName').value; 
             
    document.getElementById('SlastName').value=document. 
             getElementById('BlastName').value 

    document.getElementById('Semail').value=document. 
             getElementById('Bemail').value 

    document.getElementById('Saddress').value=document. 
             getElementById('Baddress').value 

    document.getElementById('Saddress2').value=document. 
             getElementById('Baddress2').value 

    document.getElementById('Scountry').value=document. 
             getElementById('Bcountry').value 

    document.getElementById('Sstate').value=document. 
             getElementById('Bstate').value 

    document.getElementById('Szip').value=document. 
             getElementById('Bzip').value 
             
  } 
      
  else
  { 
    document.getElementById('SfirstName').value=""; 
    document.getElementById('SlastName').value=""; 
    document.getElementById('Semail').value=""; 
    document.getElementById('Saddress').value=""; 
    document.getElementById('Saddress2').value=""; 
    document.getElementById('Scountry').value=""; 
    document.getElementById('Sstate').value=""; 
    document.getElementById('Szip').value="";   

  } 
} 

(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())


   