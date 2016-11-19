// Reset color in form, clears error message

         function resetName(frmname)
         {
           if( document.forms.contact_me.name.value == "Please, provide your name" )
           {
            document.forms.contact_me.name.value = "" ;
            document.forms.contact_me.name.style.color = "#000000";
            document.forms.contact_me.name.focus() ;
            }
          }
