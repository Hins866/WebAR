var latitude = prompt("latitude"); 
var longitude = prompt("longitude");
const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
function ShowInput() {
    alert('distanceMsg','latitude','longitude');
  }
alert('distanceMsg','latitude','longitude');   // "890 meters"
console.log(latitude,longitude);
AFRAME.registerComponent('school-playground', {
    /**
     * Code within this function will be called when everything in <a-scene> is ready and loaded.
     */
    init: function () {
      // Add code here!
      console.log('Welcome, class!');
      var sceneEl = document.querySelector('a-scene'); 
      sceneEl.querySelector('a-entity').setAttribute('gps-entity-place', {x: 0, y: 0, z: 0});
      
    }
  });
