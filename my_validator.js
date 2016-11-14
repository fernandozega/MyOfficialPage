<script type="text/javascript">
   <!--
      // Form validation code will come here.
      function Validator(frmname)
      {
        alert( "entra al validador" );

         if( document.contact_me.Name.value == "" )
         {
           alert( "OJO!!! Please provide your name!" );
            document.contact_me.Name.value = "Error" ;
            document.contact_me.Name.focus() ;
            return false;
         }

         if( document.contact_me.EMail.value == "" )
         {
            alert( "Please provide your Email!" );
            document.contact_me.EMail.focus() ;
            return false;
         }

        var emailID = document.contact_me.EMail.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");

        if (atpos < 1 || ( dotpos - atpos < 2 ))
        {
           alert("Please enter correct email ID")
           document.contact_me.EMail.focus() ;
           return false;
        }
        return( true );
         if( document.contact_me.Zip.value == "" ||
         isNaN( document.contact_me.Zip.value ) ||
         document.contact_me.Zip.value.length != 5 )
         {
            alert( "Please provide a zip in the format #####." );
            document.contact_me.Zip.focus() ;
            return false;
         }

         if( document.contact_me.Country.value == "-1" )
         {
            alert( "Please provide your country!" );
            return false;
         }
         return( true );
      }
   //-->
</script>
