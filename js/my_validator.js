// Validate mail form

   // Form validation code will come here.
      function validateForm(frmname)
      {
        var x  = 0 ;

// get the page language
      var whatpage  = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
      var whatlang  = whatpage.substr(6, 2);
// Text variables
      switch(whatlang) {
         case "en":
             var vname = "Please, provide your name" ;
             var vemail1 = "Please, provide your email" ;
             var vemail2 = "Please, provide a correct email" ;
             var vwebsite = "Please, provide a correct website" ;
             var vphone = "Please, provide a valid phone number" ;
             var vmessage = "Please, provide a valid message" ;
             var vchars  = "Please, do not enter invalid characters" ;
        break;
        case "es":
             var vname = "Por favor, ingresa tu nombre" ;
             var vemail1 = "Por favor, ingresa tu correo" ;
             var vemail2 = "Por favor, ingresa un correo válido" ;
             var vwebsite = "Por favor, ingresa una pagina web correcta" ;
             var vphone = "Por favor, ingresa un número de teléfono válido" ;
             var vmessage = "Por favor, ingresa un mensaje valido" ;
             var vchars  = "Por favor, no ingreses caracteres inválidos" ;
       break;
       case "pt":
             var vname = "Por favor, insira seu nome" ;
             var vemail1 = "Por favor. insira seu email" ;
             var vemail2 = "Por favor. insira um email válido" ;
             var vwebsite = "Por favor, insira um site correto" ;
             var vphone = "Por favor. insira um número de telefone válido" ;
             var vmessage = "Por favor, insira uma mensagem válida" ;
             var vchars  = "Por favor, não insira caracteres inválidos" ;
       break;
       case "fr":
             var vname = "S'il vous plaît, entrer ton nom" ;
             var vemail1 = "S'il vous plaît, entrer ton email" ;
             var vemail2 = "S'il vous plaît, entrer un email valide" ;
             var vwebsite = "S'il vous plaît, entrer un site correct" ;
             var vphone = "S'il vous plaît, entrer un numéro de téléphone valide" ;
             var vmessage = "S'il vous plaît, entrer un message valide" ;
             var vchars  = "S'il vous plaît ne pas entrer des caractères non valides" ;
       break;
       case "it":
             var vname = "Si prega di inserire il tuo nome" ;
             var vemail1 = "Si prega di inserire il tuo email" ;
             var vemail2 = "Si prega di inserire un email valido" ;
             var vwebsite = "Si prega di inserire un sito web corretto" ;
             var vphone = "Si prega di inserire un numero di telefono valido" ;
             var vmessage = "Si prega di inserire un messaggio valido" ;
             var vchars  = "Si prega di non inserire caratteri non validi" ;
       break;
      }

// Validate from bottom to top to get focus on first error

    if( document.forms.contact_me.website.value  == vwebsite)
    {
      // do nothing, it's ok
    } else  {
        var websiteID  = document.forms.contact_me.website.value;
//        var myPattern  = "/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%? =~_|!:,.;]*[-a-z0-9+&@#\/% =~_|]/i"
        var myPattern  = "/"
      // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
/*      if ( !preg_match(myPattern , websiteID) )
      {
        alert (myPattern) ;
       document.forms.contact_me.website.value  = vwebsite ;
       document.forms.contact_me.website.style.color  = "#FF0000";
       document.forms.contact_me.website.focus() ;
       x  = 1 ;
     } else {        alert ("entra a website3") ;} //sacar
*/
    }

    if( document.forms.contact_me.email.value  == "" ||
        document.forms.contact_me.email.value  == vemail1 )
    {
       document.forms.contact_me.email.value  = vemail1 ;
       document.forms.contact_me.email.style.color  = "#FF0000";
       document.forms.contact_me.email.focus() ;
       x  = 1 ;
    } else {

          var emailID  = document.forms.contact_me.email.value;
          atpos  = emailID.indexOf("@");
          dotpos  = emailID.lastIndexOf(".");

          if (atpos < 1 || ( dotpos - atpos < 2 ))
          {
            document.forms.contact_me.email.value  = vemail2 ;
            document.forms.contact_me.email.style.color  = "#FF0000";
            document.forms.contact_me.email.focus() ;
            x  = 1 ;
          } else {
            if(IsInjected($email))
              document.forms.contact_me.email.value  = vchars ;
              document.forms.contact_me.email.style.color  = "#FF0000";
              document.forms.contact_me.email.focus() ;
              x  = 1 ;

          }

    }

    if( document.forms.contact_me.name.value  == "" ||
        document.forms.contact_me.name.value  == vname)
    {
       document.forms.contact_me.name.value  = vname ;
       document.forms.contact_me.name.style.color  = "#FF0000";
       document.forms.contact_me.name.focus() ;
       x  = 1 ;
    }

    if (x  == 1) {
        return false;
      } else {
        return( true );
      }
}

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections  = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject  = join('|', $injections);
  $inject  = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
