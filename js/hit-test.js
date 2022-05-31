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
        gltfEl.setAttribute('src', show);
        //src value changed but dont update the model???
        console.log(gltfEl.getAttribute('src'));
        });
    gltfEl.emit('change');
  }
});

//Connect the checked point record from marker tracking page and location based page
let globalpoint = sessionStorage.getItem('checkedpoint');
let globalpoint2 = sessionStorage.getItem('checkedgpspoint');
var modelSavedpoint = [];
modelSavedpoint.push(globalpoint);
modelSavedpoint.push(globalpoint2);

if (modelSavedpoint.includes("CP4")){
    var show="#CP4-model"
}else if (modelSavedpoint.includes("CP3")){
    var show="#CP3-model"
}else if (modelSavedpoint.includes("CP2")){
    var show="#CP2-model"
}else if (modelSavedpoint.includes("CP1")){
    var show="#CP1-model"
}
//Button for user check his record
function Savedpoint(){
    alert("Your checked point is " + modelSavedpoint);
}
//Button for user clear his record
function ClearSavedpoint(){
    sessionStorage.clear();
    alert("Your check point record has been reset")
}
