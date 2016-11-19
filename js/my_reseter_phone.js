// Reset color in form, clears error message

         function resetPhone(frmname)
         {
           if( document.forms.contact_me.phone.value == "Please, provide a valid phone number" )
           {
            document.forms.contact_me.phone.value = "" ;
            document.forms.contact_me.phone.style.color = "#000000";
            document.forms.contact_me.phone.focus() ;
            }
          }
