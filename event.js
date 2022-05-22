AFRAME.registerComponent('markerhandler', {

    init: function() {
            animatedMarker.addEventListener('click', function(event){
            alert("Hi i am a bird");
        });
    }});