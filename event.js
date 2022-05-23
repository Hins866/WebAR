AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#CP1-bird");
        const text = document.querySelector("#text-box");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(event){
            alert("Hi i am a bird");
            if(text.object3D.visible == false && event.detail.cursorEl){
                text.object3D.visible = true;
              } 
        });
    }});