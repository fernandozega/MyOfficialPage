// Reset color in form, clears error message

         function resetEmail(frmname)
         {
       
           if( document.forms.contact_me.email.value == "Please, provide your email" ||
              document.forms.contact_me.email.value == "Please, provide a correct email" )
           {
            document.forms.contact_me.email.value = "" ;
            document.forms.contact_me.email.style.color = "#000000";
            document.forms.contact_me.email.focus() ;
            }
          }
