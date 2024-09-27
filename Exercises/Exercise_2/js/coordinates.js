function coordinates(longitude, latitude, format = "geo") {
    /////////////////////////////////////////////////////////
    // LOGIC
    // this function get longitude and latitud coodinates provided by the user via a text-box form
    //in a html document
    // transform these coordinates into degrees, minutes and seconds and returning the result using inline format
    // or UTM returning the result using inline format depending the format requested 
    // or plot an alert messege to the user in case the user has requested the same geographic format in latitud and longitud
    // returning the same coordinates using the inline format

    ////////////////////////////////////////////////////////
    // VARIABLES

    var coordinateString = ""; // OUTPUT T PRINT TO THE USER AFTER THE REFORMATING.

    var long_degrees = 0; // input for the  DMS longitud format
    var long_minutes = 0; // input for the  DMS longitud format
    var long_seconds = 0; // input for the  DMS longitud format
    var long_hemisphere = ""; // input for the  DMS longitud format

    var lat_degrees = 0; // input for the  DMS latitud format
    var lat_minutes = 0; // input for the  DMS latitud format
    var lat_seconds = 0; // input for the  DMS latitud format
    var lat_hemisphere = ""; // input for the  DMS latitud format
    var geoPoint;

    if (lat >= -90 && lat <= 90 && long >= -180 && long <= 180) {
        if (format == "geo" || format == "gms" || format == "utm") {

            //1.  print into the console a massage validating the coordinates format

            console.log("1. The latitude and longitude coodinates are valid");

            // 2. if transform the coordinates

            //if (format == "" ){}

            if (format == "geo") {

                //formating directly the original coordinates using inline format

                coordinateString = latitude + "," + longitude


            } else if (format == "dms") {

                // trasforming the original coordinates in dms



                // formatting the transforming coordinates using inline format.

                var longitude = long_degrees + "\u{00B0}" + long_minutes + "\u{0027}" + long_seconds +
                    "\u{0022}" + long_hemisphere;
                var latitude = lat_degrees + "\u{00B0}" + lat_minutes + "\u{0027}" + lat_seconds +
                    "\u{0022}" + lat_hemisphere;

                coordinateString = latitude + "," + longitude

                return coordinateString



            } else if (format == "utm"){ 
	            
                //coordinates system definition 
                geoPoint = latitude + "," + longitude;
                proj4.defs("EPSG:4326", "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs");
                proj4.defs("EPSG:25830", "+proj=utm +zone=30 +ellps=GRS80 +units=m +no_defs");
                var utmPoint = proj4(proj4("EPSG:4326"), proj4("EPSG:25830"), geoPoint);
                coordinateString = utmPoint[0] + "," + utmPoint[1];

                return coordinateString;


            } else {
                alert("select a valid coordinate format")
            };

        } else {

            alert("The format input should be gms or geo or utm");
        }

    } else {
        alert("ERROR: The coordinates introdused are invalid");
    }


}