

google.maps.visualRefresh = true;
var map;      

class Location {

     // 
     
     constructor (lat, lng) 
     {
         this.lat=lat; this.lng=lng;
         this.location=new google.maps.LatLng(this.lat, this.lng);
     }
     
     setLat(lat)
     {
         this.lat=lat; 
         this.location=new google.maps.LatLng(this.lat, this.lng);
     }
    
    setLng(lng)
     {
         this.lng=lng; 
         this.location=new google.maps.LatLng(this.lat, this.lng);
     }
     setCoords(lat, lng)
     {
         this.lat=lat; this.lng=lng;
         this.location=new google.maps.LatLng(this.lat, this.lng);
     }
}

var Coords = {
         lat: 40.7484,
         lng: -73.9857
};

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(Coords.lat, Coords.lng),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    // assigning to global variable:
    map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
        
        map.setOptions({center:new google.maps.LatLng(prompt("Latitude"),prompt("Longitude"))});
        
}

google.maps.event.addDomListener(window, 'load', initialize);




function moveToLocationAndMarker(lat, lng){

   map.setOptions({center:new google.maps.LatLng(prompt("Latitude"),prompt("Longitude"))});
    var marker = new google.maps.Marker({
        
     position:map.getCenter(),
     map:map
 
        });      
        
          
   
    
}

function antipodeAndBack()
{
    map.setOptions({center:new google.maps.LatLng(prompt("Latitude"),prompt("Longitude"))});
    var marker = new google.maps.Marker({
        
     position:map.getCenter(),
     map:map});      
     google.maps.event.addListener(marker,'click',function() {
               map.setZoom(9);
               map.setCenter(marker.getPosition());
            });
    
}
var loc, i=0;
var color=["red","green"];
function moveToLocation(lat, lng){
    
    // using global variable:
    loc=new Location(lat,lng);
    map.panTo(loc.location);
    position:map.getCenter();

    return loc;
}



var theta = Math.PI/4;

function moveToLocationAndSquare(lat, lng){
    
    // set up the center of the circle and the radius
    // Coords.lat=lat; Coords.lng=lng;
    var radius = 4;

    var  loc=moveToLocation(lat, lng);;
    if (i==0) 
    {
       
       
        var marker = new google.maps.Marker({
            position: loc.location,
            map: map,
            icon: "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red.png"

        });
        
    }
    else 
    {
        loc.setCoords(radius*Math.cos(i*theta)+loc.lat,-radius*Math.sin(i*theta)+loc.lng);
        var marker = new google.maps.Marker({
                position: loc.location,
                map: map,
    icon: "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_"+color[i%6]+".png"

            });
        map.panTo(loc.location);

    }
    i++;
}

function randomMoveMarker() {
  var random = new google.maps.LatLng((Math.random() * (85 * 2) - 85), (Math.random() * (180 * 2) - 180));
  var marker = new google.maps.Marker({
    map: map,
    position: random
  });
  map.setCenter(marker.getPosition());
}




 
 
 function setCentre()
 {
     map.setOptions({center:new google.maps.LatLng(prompt("Latitude"),prompt("Longitude"))});
 }
 var London = new google.maps.LatLng(51.5286416,-0.1015987);
 var KingstonUponThames = new google.maps.LatLng(51.4175058,-0.2831989);
 var Woking = new google.maps.LatLng(51.3150968,-0.5505373);
 var Bracknell = new google.maps.LatLng(51.4060336,-0.7591789);
 function polyregion()
 {
    var flightPlanCoordinates = [
          {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821},
          {lat: -18.142, lng: 178.431},
          {lat: -27.467, lng: 153.027}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
      }
    
 



