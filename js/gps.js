//Ask user Input the location
var lat = prompt('latitude'); 
var long = prompt('longitude');
var input = ('latitude: '+ lat +'; longitude: '+ long)

//Modify the model location by user input
AFRAME.registerComponent(' Modifying Entities', {
        /**
         * Code within this function will be called when everything in <a-scene> is ready and loaded.
         */
        init: function () {
          // Add code here!
          var sceneEl = document.querySelector('a-scene'); 
          var gpsEl = sceneEl.querySelector('a-entity')
  
          gpsEl.addEventListener('foo', function () {
            gpsEl.setAttribute('gps-entity-place', input);  
          });
          gpsEl.emit('foo');
        }
      });; 

//Button for user check inputed value
function ShowInput(){
    alert(input);
    }
  