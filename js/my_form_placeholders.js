// Put placeholders in form, according to language

         function putPlaceholders(frmname)
         {
           //get the page language
           var whatpage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
           var whatlang = whatpage.substr(6, 2);
// window.alert(whatlang);
           switch(whatlang) {
               case "en":
                document.forms.contact_me.name.placeholder = "your name*" ;
                document.forms.contact_me.email.placeholder = "your email*" ;
                document.forms.contact_me.phone.placeholder = "your phone number" ;
                document.forms.contact_me.website.placeholder = "your website" ;
                document.forms.contact_me.message.placeholder = "your message" ;
              break;
              case "es":
               document.forms.contact_me.name.placeholder = "tu nombre*" ;
               document.forms.contact_me.email.placeholder = "tu correo*" ;
               document.forms.contact_me.phone.placeholder = "tu número telefónico" ;
               document.forms.contact_me.website.placeholder = "tu página" ;
               document.forms.contact_me.message.placeholder = "tu mensaje" ;
             break;
             case "pt":
              document.forms.contact_me.name.placeholder = "seu nome*" ;
              document.forms.contact_me.email.placeholder = "seu email*" ;
              document.forms.contact_me.phone.placeholder = "seu número de telefone" ;
              document.forms.contact_me.website.placeholder = "seu site" ;
              document.forms.contact_me.message.placeholder = "sua mensagem" ;
            break;
            case "fr":
             document.forms.contact_me.name.placeholder = "ton nom*" ;
             document.forms.contact_me.email.placeholder = "ton email*" ;
             document.forms.contact_me.phone.placeholder = "ton numéro de téléphone" ;
             document.forms.contact_me.website.placeholder = "ton site" ;
             document.forms.contact_me.message.placeholder = "ton message" ;
           break;
           case "it":
            document.forms.contact_me.name.placeholder = "il tuo nome*" ;
            document.forms.contact_me.email.placeholder = "la tua email*" ;
            document.forms.contact_me.phone.placeholder = "il tuo numero di telefono" ;
            document.forms.contact_me.website.placeholder = "la tua pagina web" ;
            document.forms.contact_me.message.placeholder = "il tuo messaggio" ;
          break;

           }
          }
