// Put placeholders in form, according to language

         function putPlaceholders(frmname)
         {
           //get the page language
           var whatpage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
           var whatlang = whatpage.substr(6, 2);

           switch(whatlang) {
               case "en":
                document.forms.contact_me.name.placeholder = "your name*" ;
                document.forms.contact_me.email.placeholder = "your email*" ;
                document.forms.contact_me.phone.placeholder = "your phone number" ;
                document.forms.contact_me.website.placeholder = "your website" ;
                document.forms.contact_me.message.placeholder = "your message" ;
              break;
              case "es":
               document.forms.contact_me.name.placeholder = "tu nombre *" ;
               document.forms.contact_me.email.placeholder = "tu correo*" ;
               document.forms.contact_me.phone.placeholder = "tu número telefónico" ;
               document.forms.contact_me.website.placeholder = "tu página" ;
               document.forms.contact_me.message.placeholder = "tu mensaje" ;
             break;
           }
          }
