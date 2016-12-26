// Reset color in form, clears error message

         function resetName(frmname)
         {
           //get the page language
           var whatpage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
           var whatlang = whatpage.substr(6, 2);

           switch(whatlang) {
              case "en":
                if( document.forms.contact_me.name.value == "Please, provide your name" )
                  {
                    document.forms.contact_me.name.value = "" ;
                    document.forms.contact_me.name.style.color = "#000000";
                    document.forms.contact_me.name.focus() ;
                  }
              break;
              case "es":
                if( document.forms.contact_me.name.value == "Por favor, ingresa tu nombre" )
                  {
                    document.forms.contact_me.name.value = "" ;
                    document.forms.contact_me.name.style.color = "#000000";
                    document.forms.contact_me.name.focus() ;
                  }
              break;
              case "pt":
                if( document.forms.contact_me.name.value == "Por favor, insira seu nome" )
                  {
                    document.forms.contact_me.name.value = "" ;
                    document.forms.contact_me.name.style.color = "#000000";
                    document.forms.contact_me.name.focus() ;
                  }
              break;
              case "fr":
                if( document.forms.contact_me.name.value == "S'il vous plaît, entrer ton nom" )
                  {
                    document.forms.contact_me.name.value = "" ;
                    document.forms.contact_me.name.style.color = "#000000";
                    document.forms.contact_me.name.focus() ;
                  }
              break;
              case "it":
                if( document.forms.contact_me.name.value == "Si prega di inserire il tuo nome" )
                  {
                    document.forms.contact_me.name.value = "" ;
                    document.forms.contact_me.name.style.color = "#000000";
                    document.forms.contact_me.name.focus() ;
                  }
              break;
            }
          }
