AFRAME.registerComponent("hide-on-hit-test-start", {
  init: function() {
    var self = this;
    //hide model when enter hit testing
    this.el.sceneEl.addEventListener("ar-hit-test-start", function() {
      self.el.object3D.visible = false;
    });
    //show model when enter hit testing
    this.el.sceneEl.addEventListener("exit-vr", function() {
      self.el.object3D.visible = true;
    });
  }
});

window.addEventListener("DOMContentLoaded", function() {
  const sceneEl = document.querySelector("a-scene");
  const message = document.getElementById("dom-overlay-message");

  message.addEventListener("beforexrselect", e => {
    e.preventDefault();
  });

  sceneEl.addEventListener("enter-vr", function() {
    if (this.is("ar-mode")) {
      // Entered AR
      message.textContent = "";

      // Told user hit testing available
      this.addEventListener(
        "ar-hit-test-start",
        function() {
          message.innerHTML = `Scanning environment, please wait.`;
        },
        { once: true }
      );

      // 
      // Told user place the model
      this.addEventListener(
        "ar-hit-test-achieved",
        function() {
          message.innerHTML = `Select the location to place`;
        },
        { once: true }
      );

      this.addEventListener(
        "ar-hit-test-select",
        function() {
          // User Placed the model show 
          message.textContent = "Finish! Lets save the photo!!";
        },
        { once: true }
      );
    }
  });

  sceneEl.addEventListener("exit-vr", function() {
    message.textContent = "Exited Immersive Mode";
  });
});

//Model Recording the checkedpoint to display different model
AFRAME.registerComponent('model-change', {
  init: function () {
        var sceneEl = document.querySelector('a-scene');
        var placeEl = document.querySelector('#place-model');
        var gltfEl = document.querySelector('a-gltf-model');
        console.log(sceneEl.querySelector('#place-model'));
        console.log(placeEl.querySelector('a-gltf-model'));
        console.log(gltfEl.getAttribute('src'));
        
        gltfEl.addEventListener('change', function () {
        gltfEl.setAttribute('src','#CP2-model');
        //src value changed but dont update the model???
        console.log(gltfEl.getAttribute('src'));
        });
    gltfEl.emit('change');
  }
});

let globalpoint = sessionStorage.getItem('checkedpoint');
let globalpoint2 = sessionStorage.getItem('checkedgpspoint');
var modelSavedpoint = [];
modelSavedpoint.push(globalpoint);
modelSavedpoint.push(globalpoint2);

if (modelSavedpoint.includes("CP1")){
  var show="CP1-model"
  alert(show)
}
function Savedpoint(){
    alert(modelSavedpoint);
}

/**

function Savedpoint(){
    let globalpoint = sessionStorage.getItem('checkedpoint');
    let globalpoint2 = sessionStorage.getItem('checkedgpspoint');
    var modelSavedpoint = [];
    modelSavedpoint.push(globalpoint);
    modelSavedpoint.push(globalpoint2);
    alert(modelSavedpoint);
}
* 
*/
function ClearSavedpoint(){
    sessionStorage.clear();
}
