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

function readlocalCSV() {

    //alert("the call is correct");


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

            var url = "../../Files/random_5000.csv"
            
            console.log(csvData);

            var jsonText = xhr.responseText;

            console.log(jsonText);

            // convert text to object

            jsonObject = JSON.parse(jsonText);


            console.log(JSON.stringify(jsonObject, null, 4));




            // Print on HTML <div>
            var textbox = document.getElementById("text-box");
            
            textbox.innerHTML = csvData;


            // CSV Processing in JS
            
            var csvLines = csvData.split("\n");

            console.log(csvLines);

            for(var count=0; count< csvLines.Length; count++) {


                var record = csvLines[count].split(",");

                console.log(record);
            }
        }
        
        
    
    
    }


var csvData; //undefined

}


/////////////////////////////////////////////////

function utmToGeo(){

    if(xhr.readyState == 4 && xhr.status == 200){
        //&& = Logical AND

        var jsonText = xhr.responseText;

        console.log(jsonText);


        //alert("utmToGeo()");


    //Defining origin and target CRSs

    proj4defs("EPSG:25830", "+proj=utm + zone=30 + ellps=GRS80 + units=m + no_defs"); //origen
    proj4defs("EPSG:4326", "+proj=longlat + ellps=WGS84 + datum=WGS84 +  no_defs"); // destino

    //Parameter 1: alias
    //Parameter 2: CRS definition
    //Parameter 3: definition in Proj4 format





}

