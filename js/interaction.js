var savedpoint= [];

//Click event 
AFRAME.registerComponent('accepts-clicks', {
  init: function() {
    this.el.addEventListener('touchend', handleClickEvent);
    this.el.addEventListener('click', handleClickEvent);
  },
  tick: function() {
    hideInformationBubbleIfNoMarker();
  }
});

//Click event checking
function handleClickEvent() {
  checkpoints.forEach(function(model) {
    var CheckpointMarker = document.querySelector("#" + model.name + "-marker");
    if (CheckpointMarker && CheckpointMarker.object3D.visible) {
      const checking = savedpoint.includes(model.name)
      if (checking){
        toggleInformationBubble(model.dialogue);
      } else {
        toggleInformationBubble(model.dialogue);
        savedpoint.push(model.name);
        sessionStorage.checkedpoint = savedpoint;
        console.log(savedpoint);
      }
    }
  });
}

//Information bubble disappear event
function hideInformationBubbleIfNoMarker() {
  var InformationBubble = document.querySelector(".information-bubble");
  if (InformationBubble.style.display === 'none' || !InformationBubble.style.display) return;

  var shouldHide = true;
  checkpoints.forEach(function(model){
    var CheckpointMarker = document.querySelector("#" + model.name + "-marker");
    if (CheckpointMarker && CheckpointMarker.object3D.visible) shouldHide = false;
  });

  if (shouldHide) InformationBubble.style.display = 'none';
};

//Information-bubble display
function toggleInformationBubble(dialogue) {
  var InformationBubble = document.querySelector(".information-bubble");
	if (InformationBubble.style.display === 'none' || !InformationBubble.style.display) {
		InformationBubble.innerHTML = dialogue;
		InformationBubble.style.display = 'block';
	} else {
		InformationBubble.style.display = 'none';
	}
};

