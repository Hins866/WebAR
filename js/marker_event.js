AFRAME.registerComponent('markerhandler1', {

    init: function() {
        const cp1marker = document.querySelector("#CP1-marker");
        const cp1 = document.querySelector("#CP1");
        const cp1text = document.querySelector("#CP1-text");
      
        // every click, we make our model grow in size :)
        cp1marker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (cp1 && intersectedElement === cp1) {
                cp1text.setAttribute('visible', true);
            }
        });
}});