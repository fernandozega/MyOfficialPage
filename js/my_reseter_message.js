// Reset color in form, clears error message

         function resetMessage (frmname)
         {
           if( document.forms.contact_me.message.value == "Please, provide a valid message" )
           {
            document.forms.contact_me.message.value = "" ;
            document.forms.contact_me.message.style.color = "#000000";
            document.forms.contact_me.message.focus() ;
            }
          }
