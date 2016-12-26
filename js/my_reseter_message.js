// Reset color in form, clears error message

         function resetMessage (frmname)
         {
           //get the page language
           var whatpage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
           var whatlang = whatpage.substr(6, 2);

           switch(whatlang) {
              case "en":
                if( document.forms.contact_me.message.value == "Please, provide a valid message" )
                  {
                      document.forms.contact_me.message.value = "" ;
                      document.forms.contact_me.message.style.color = "#000000";
                      document.forms.contact_me.message.focus() ;
                  }
              break;
              case "es":
                if( document.forms.contact_me.message.value == "Por favor, ingresa un mensaje valido" )
                  {
                      document.forms.contact_me.message.value = "" ;
                      document.forms.contact_me.message.style.color = "#000000";
                      document.forms.contact_me.message.focus() ;
                  }
              break;
              case "pt":
                if( document.forms.contact_me.message.value == "Por favor, insira uma mensagem válida" )
                  {
                      document.forms.contact_me.message.value = "" ;
                      document.forms.contact_me.message.style.color = "#000000";
                      document.forms.contact_me.message.focus() ;
                  }
              break;
              case "fr":
                if( document.forms.contact_me.message.value == "S'il vous plaît, entrer un message valide" )
                  {
                      document.forms.contact_me.message.value = "" ;
                      document.forms.contact_me.message.style.color = "#000000";
                      document.forms.contact_me.message.focus() ;
                  }
              break;
              case "it":
                if( document.forms.contact_me.message.value == "Si prega di inserire un messaggio valido" )
                  {
                      document.forms.contact_me.message.value = "" ;
                      document.forms.contact_me.message.style.color = "#000000";
                      document.forms.contact_me.message.focus() ;
                  }
              break;
            }  
          }
