var savedpoint= [];

//Click event 
AFRAME.registerComponent('accepts-clicks', {
  init: function() {
    this.el.addEventListener('touchend', handleClickEvent);
    console.log("touched event active");
    this.el.addEventListener('click', handleClickEvent);
    console.log("clicked event active");
  },
  tick: function() {
    hideSpeechBubbleIfNoMarker();
  }
});

//Click event checking
function handleClickEvent() {
  console.log("click event active");
  checkpoints.forEach(function(model) {
    var CheckpointMarker = document.querySelector("#" + model.name + "-marker");
    if (CheckpointMarker && CheckpointMarker.object3D.visible) {
      const checking = savedpoint.includes(model.name)
      if (checking){
        toggleSpeechBubble(model.dialogue);
      } else {
        //console.log(builder.dialogue);
        toggleSpeechBubble(model.dialogue);
        savedpoint.push(model.name);
        sessionStorage.checkedpoint = savedpoint;
        //console.log(checking);
        console.log(savedpoint);
      }
    }
  });
}

//Information bubble disappear event
function hideSpeechBubbleIfNoMarker() {
  var speechBubble = document.querySelector(".speech-bubble");
  if (speechBubble.style.display === 'none' || !speechBubble.style.display) return;

  var shouldHide = true;
  checkpoints.forEach(function(model){
    var CheckpointMarker = document.querySelector("#" + model.name + "-marker");
    if (CheckpointMarker && CheckpointMarker.object3D.visible) shouldHide = false;
  });

  if (shouldHide) speechBubble.style.display = 'none';
};

//Information-bubble display
function toggleSpeechBubble(dialogue) {
  var speechBubble = document.querySelector(".speech-bubble");
	if (speechBubble.style.display === 'none' || !speechBubble.style.display) {
		speechBubble.innerHTML = dialogue;
		speechBubble.style.display = 'block';
	} else {
		speechBubble.style.display = 'none';
	}
};

