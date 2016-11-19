// Reset color in form, clears error message

         function resetWebsite(frmname)
         {
           if( document.forms.contact_me.website.value == "Please, provide a correct website" )
           {
            document.forms.contact_me.website.value = "" ;
            document.forms.contact_me.website.style.color = "#000000";
            document.forms.contact_me.website.focus() ;
            }
          }
