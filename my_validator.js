// Validate mail form

   // Form validation code will come here.
      function validateForm(frmname)
      {
        var x = 0 ;

  // Validate from bottom to top to get focus on first error

    if( document.forms.contact_me.website.value == "")
    {
      // do nothing, it's ok
    } else  {
        var websiteID = document.forms.contact_me.website.value;
//        var myPattern = "/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i"
        var myPattern = "/"
      // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
      if ( !preg_match(myPattern , websiteID) )
      {
        alert (myPattern) ;
       document.forms.contact_me.website.value = "Please, provide a correct website" ;
       document.forms.contact_me.website.style.color = "#FF0000";
       document.forms.contact_me.website.focus() ;
       x = 1 ;
     } else {        alert ("entra a website3") ;} //sacar
    }

    if( document.forms.contact_me.email.value == "" ||
        document.forms.contact_me.email.value == "Please, provide your email" )
    {
       document.forms.contact_me.email.value = "Please, provide your email" ;
       document.forms.contact_me.email.style.color = "#FF0000";
       document.forms.contact_me.email.focus() ;
       x = 1 ;
    } else {

          var emailID = document.forms.contact_me.email.value;
          atpos = emailID.indexOf("@");
          dotpos = emailID.lastIndexOf(".");

          if (atpos < 1 || ( dotpos - atpos < 2 ))
          {
            document.forms.contact_me.email.value = "Please, provide a correct email" ;
            document.forms.contact_me.email.style.color = "#FF0000";
            document.forms.contact_me.email.focus() ;
            x = 1 ;
          } else {
            if(IsInjected($email))
              document.forms.contact_me.email.value = "Please, do not enter invalid characters" ;
              document.forms.contact_me.email.style.color = "#FF0000";
              document.forms.contact_me.email.focus() ;
              x = 1 ;

          }

    }

    if( document.forms.contact_me.name.value == "" ||
        document.forms.contact_me.name.value == "Please, provide your name")
    {
       document.forms.contact_me.name.value = "Please, provide your name" ;
       document.forms.contact_me.name.style.color = "#FF0000";
       document.forms.contact_me.name.focus() ;
       x = 1 ;
    }

    if (x == 1) {
        return false;
      } else {
        return( true );
      }
}

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
