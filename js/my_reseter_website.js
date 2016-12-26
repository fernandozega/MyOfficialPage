// Reset color in form, clears error message

         function resetWebsite(frmname)
         {
           //get the page language
           var whatpage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
           var whatlang = whatpage.substr(6, 2);

           switch(whatlang) {
              case "en":
                if( document.forms.contact_me.website.value == "Please, provide a correct website" )
                  {
                    document.forms.contact_me.website.value = "" ;
                    document.forms.contact_me.website.style.color = "#000000";
                    document.forms.contact_me.website.focus() ;
                  }
              break;
              case "es":
                if( document.forms.contact_me.website.value == "Por favor, ingresa una pagina web correcta" )
                  {
                    document.forms.contact_me.website.value = "" ;
                    document.forms.contact_me.website.style.color = "#000000";
                    document.forms.contact_me.website.focus() ;
                  }
              break;
              case "pt":
                if( document.forms.contact_me.website.value == "Por favor, insira um site correto" )
                  {
                    document.forms.contact_me.website.value = "" ;
                    document.forms.contact_me.website.style.color = "#000000";
                    document.forms.contact_me.website.focus() ;
                  }
              break;
              case "fr":
                if( document.forms.contact_me.website.value == "S'il vous plaît, entrer un site correct" )
                  {
                    document.forms.contact_me.website.value = "" ;
                    document.forms.contact_me.website.style.color = "#000000";
                    document.forms.contact_me.website.focus() ;
                  }
              break;
              case "it":
                if( document.forms.contact_me.website.value == "Si prega di inserire un sito web corretto" )
                  {
                    document.forms.contact_me.website.value = "" ;
                    document.forms.contact_me.website.style.color = "#000000";
                    document.forms.contact_me.website.focus() ;
                  }
              break;
            }  
          }
