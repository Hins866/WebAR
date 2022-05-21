AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("CP1-marker");
        const aEntity = document.querySelector("CP1-bird");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            alert('click');
        });
    }});