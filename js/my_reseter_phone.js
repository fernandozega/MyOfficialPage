// Reset color in form, clears error message

         function resetPhone(frmname)
         {
           //get the page language
           var whatpage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
           var whatlang = whatpage.substr(6, 2);

           switch(whatlang) {
              case "en":
                if( document.forms.contact_me.phone.value == "Please, provide a valid phone number" )
                  {
                    document.forms.contact_me.phone.value = "" ;
                    document.forms.contact_me.phone.style.color = "#000000";
                    document.forms.contact_me.phone.focus() ;
                  }
              break;
              case "es":
                if( document.forms.contact_me.phone.value == "Por favor, ingresa un número de teléfono válido" )
                  {
                    document.forms.contact_me.phone.value = "" ;
                    document.forms.contact_me.phone.style.color = "#000000";
                    document.forms.contact_me.phone.focus() ;
                  }
              break;
              case "pt":
                if( document.forms.contact_me.phone.value == "Por favor. insira um número de telefone válido" )
                  {
                    document.forms.contact_me.phone.value = "" ;
                    document.forms.contact_me.phone.style.color = "#000000";
                    document.forms.contact_me.phone.focus() ;
                  }
              break;
              case "fr":
                if( document.forms.contact_me.phone.value == "S'il vous plaît, entrer un numéro de téléphone valide" )
                  {
                    document.forms.contact_me.phone.value = "" ;
                    document.forms.contact_me.phone.style.color = "#000000";
                    document.forms.contact_me.phone.focus() ;
                  }
              break;
              case "it":
                if( document.forms.contact_me.phone.value == "Si prega di inserire un numero di telefono valido" )
                  {
                    document.forms.contact_me.phone.value = "" ;
                    document.forms.contact_me.phone.style.color = "#000000";
                    document.forms.contact_me.phone.focus() ;
                  }
              break;
            }    
          }
