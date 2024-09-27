var jsonObject; // undefined

function readJSON() {

    var url ="http://mapas.valencia.es/lanzadera/opendata/Tra_recarga_electrica/JSON";

    // 1. Create XHR instance
    var xhr = new XMLHttpRequest();

    //2. open and send request

    xhr.open("GET", url, true);
    // parametrt 1: HTTP verb
    // parameter 2: URL
    // paramete 3: Boolean  -- true = asynchronous, false= synchronous

    xhr.send();

    // 3. get the response

    xhr.onreadystatechange = function() {//funcion anonima sin nombre

        if(xhr.readyState == 4 && xhr.status == 200){
            //&& = Logical AND

            var jsonText = xhr.responseText;

            console.log(jsonText);

            // convert text to object

            jsonObject = JSON.parse(jsonText);


            console.log(JSON.stringify(jsonObject, null, 4));




            // Print on HTML <div>
            var textbox = document.getElementById("text-box");
            
            textbox.innerHTML = JSON.stringify(jsonObject, null, 4);
        }
    
        
        
    
    
    }
 //alert()

}