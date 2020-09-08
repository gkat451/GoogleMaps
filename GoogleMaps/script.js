//google.maps.visualRefresh = true;
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
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    // assigning to global variable:
    map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
        
        map.setOptions({center:new google.maps.LatLng(prompt("Latitude"),prompt("Longitude"))});
        
}

google.maps.event.addDomListener(window, 'load', initialize);


// functions/methods
var loc, i=0;
var color=["red","green","blue","yellow","white","purple"];

function moveToLocationAndMarker(lat, lng){

    map.setOptions({center:new google.maps.LatLng(prompt("Latitude"),prompt("Longitude"))});
    var marker = new google.maps.Marker({
        
     position:map.getCenter(),
     map:map});      
        
           
    // using global variable:
    
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



var theta = Math.PI/4;

function moveToLocationANDCircle(lat, lng){
    
    // set up the center of the circle and the radius
    // Coords.lat=lat; Coords.lng=lng;
    var radius = 4;

    var  loc=moveToLocation(lat, lng);;
    if (i==0) 
    {
        // loc=moveToLocation(lat, lng);
        // runMarker=new Location(loc.lat,loc.lng);
        // window.alert("value of centre:("+centre.lat()+","+centre.lng()+")");
        // drop marker at this location, used as centre of circle
       
        var marker = new google.maps.Marker({
            position: loc.location,
            map: map,
            icon: "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red.png"

        });
        // loc.setLat(runMarker.lat+=radius);
        // loc.setCoords(radius*Math.cos(i*theta)+loc.lat,-radius*Math.sin(i*theta)+loc.lng);
    }
    else 
    {
        loc.setCoords(radius*Math.cos(i*theta)+loc.lat,-radius*Math.sin(i*theta)+loc.lng);
        // window.alert("value of current position:("+loc.lat+","+loc.lng+")");
        var marker = new google.maps.Marker({
                position: loc.location,
                map: map,
    icon: "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_"+color[i%6]+".png"

            });
        // window.alert("location: "+loc.location);
        map.panTo(loc.location);

    }
    i++;
}

/*function randomMoveMarker(lat, lng)
{ 
    Coords.lat=lat; Coords.lng=lng;
    map.panTo(new google.maps.LatLng((Math.random()-0.5)*150+Coords.lat, 
                                    (Math.random()-0.5)*150+Coords.lng));
                                    
      var marker = new google.maps.Marker({
          map:map,
          position:new google.LatLng(lat,lng)
          
               
      });
}
*/
function randomMoveMarker() {
  var random = new google.maps.LatLng((Math.random() * (85 * 2) - 85), (Math.random() * (180 * 2) - 180));
  var marker = new google.maps.Marker({
    map: map,
    position: random
  });
  map.setCenter(marker.getPosition());
}


function GMapBounds ()
{
    var strictBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(85, -180),           // top left corner of map
    new google.maps.LatLng(-85, 180)            // bottom right corner
);
map.fitBounds(strictBounds);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var kk=0;
var currZ;
var delay=30000;
var howmany=10;
var period = 1000;
var endTime = 300000;
var counter = 0;

var maxZ=10, minZ=2;

function zoomingBy (inc)
{
 console.log(inc);
 currZ+=inc;
 map.setOptions({zoom: currZ});  
 map.panTo( new google.maps.LatLng(map.getCenter().lat(),map.getCenter().lng()));    
}


function zoomPingPong (inc)
 {  
      var sleepyAlert = setInterval (
         function() {
              
              currZ=map.getZoom();
              zoomingBy(inc);
           if (counter===endTime)
             clearInterval(sleepyAlert); 
            
          counter+=period;
          
         if ( (currZ>maxZ)||(currZ<minZ) ) { inc=-inc; }
      
      },period);
     
   
 }  
 
 function setCentre()
 {
     map.setOptions({center:new google.maps.LatLng(prompt("Latitude"),prompt("Longitude"))});
 }




