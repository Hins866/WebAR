//Ask user Input the location
var lat = prompt('latitude'); 
var long = prompt('longitude');
var input = ('latitude: '+ lat +'; longitude: '+ long)

//Modify the model location by user input
AFRAME.registerComponent(' Modifying Entities', {
        init: function () {
          var sceneEl = document.querySelector('a-scene'); 
          var gpsEl = sceneEl.querySelector('a-entity')
  
          gpsEl.addEventListener('gps-update', function () {
            gpsEl.setAttribute('gps-entity-place', input);  
          });
          gpsEl.emit('gps-update');
        }
      });; 

//Button for user check inputed value
function ShowInput(){
    alert(input);
    }
  