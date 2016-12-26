// Reset color in form, clears error message

         function resetEmail(frmname)
         {
           //get the page language
           var whatpage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
           var whatlang = whatpage.substr(6, 2);

           switch(whatlang) {
               case "en":
                 if( document.forms.contact_me.email.value == "Please, provide your email" ||
                  document.forms.contact_me.email.value == "Please, provide a correct email" )
                  {
                    document.forms.contact_me.email.value = "" ;
                    document.forms.contact_me.email.style.color = "#000000";
                    document.forms.contact_me.email.focus() ;
                  }
               break;
               case "es":
                 if( document.forms.contact_me.email.value == "Por favor, ingresa tu correo" ||
                  document.forms.contact_me.email.value == "Por favor, ingresa un correo válido}" )
                  {
                    document.forms.contact_me.email.value = "" ;
                    document.forms.contact_me.email.style.color = "#000000";
                    document.forms.contact_me.email.focus() ;
                  }
               break;
               case "pt":
                 if( document.forms.contact_me.email.value == "Por favor. insira seu email" ||
                  document.forms.contact_me.email.value == "Por favor. insira um email válido" )
                  {
                    document.forms.contact_me.email.value = "" ;
                    document.forms.contact_me.email.style.color = "#000000";
                    document.forms.contact_me.email.focus() ;
                  }
               break;
               case "fr":
                 if( document.forms.contact_me.email.value == "S'il vous plaît, entrer ton email" ||
                  document.forms.contact_me.email.value == "S'il vous plaît, entrer un email valide" )
                  {
                    document.forms.contact_me.email.value = "" ;
                    document.forms.contact_me.email.style.color = "#000000";
                    document.forms.contact_me.email.focus() ;
                  }
               break;
               case "it":
                 if( document.forms.contact_me.email.value == "Si prega di inserire il tuo email" ||
                  document.forms.contact_me.email.value == "Si prega di inserire un email valido" )
                  {
                    document.forms.contact_me.email.value = "" ;
                    document.forms.contact_me.email.style.color = "#000000";
                    document.forms.contact_me.email.focus() ;
                  }
               break;
             } 
            }
