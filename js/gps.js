//Modify the model location by user input
AFRAME.registerComponent('modifying-entities', {
  init: function () {
    var sceneEl = document.querySelector('a-scene');
    var gpsEl = sceneEl.querySelector('a-entity')
    console.log(sceneEl.querySelector('a-entity'));
    console.log(gpsEl);
    //Why i can't get the gps-entity-place??? 
    console.log(gpsEl.querySelector('gps-entity-place'));
/**    
    gpsEl.addEventListener('gps-update', function () {
      gpsEl.setAttribute('gps-entity-place', input);  
    });
    gpsEl.emit('gps-update');
*/  
  } 
})

//Ask user Input the location
function Input(){
var lat = prompt('latitude'); 
var long = prompt('longitude');
this.input = ('latitude: '+ lat +'; longitude: '+ long)
sessionStorage.setItem('checkedgpspoint','CP4');
}

//Button for user check inputed value
function ShowInput(){
alert(input);
}