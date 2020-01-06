
$(document).ready(function(){
    $('#userForm').submit(function(){
     
        // show that something is loading
        $('#response').html("<b>Loading response...</b>");
         
       
        $.post('https://recyclewaste406.000webhostapp.com/api.php?module=event&task=store', $(this).serialize(), function(data){
             
            // show the response
            $('#response').html(data);
             
        }).fail(function() {
         
            // just in case posting your form failed
            alert( "Posting failed." );
             
        });
 
        // to prevent refreshing the whole page page
        return false;
 
    });
});
