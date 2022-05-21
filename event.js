AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#CP1-marker");
        const text = document.querySelector("#CP1-bird");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(event){
            if(text.object3D.visible == false && event.detail.cursorEl){
                text.object3D.visible = true;
              } 
        });
    }});