var checkpoints = [];

function ARModel(name, dialogue) {
    this.name = name;
    this.dialogue = dialogue;
}

ARModel.prototype.speak = function() {
    return this.dialogue;   
}

function Model(name, dialogue ) {
    ARModel.call(this, name, dialogue);
}

Model.prototype = Object.create(ARModel.prototype);

function initiateModels() {
    var checkpointsArray = [
      {
        name: 'CP1',
        dialogue: 'Congratulation! You find Check Point 1',
      },
      {
        name: 'CP2',
        dialogue: 'Congratulation! You find Check Point 2',
      },
      {
        name: 'CP3',
        dialogue: 'Congratulation! You find Check Point 3',
      }
    ];
  
    checkpointsArray.forEach(function(model){
        checkpoints.push(new Model(model.name, model.dialogue));
        });    
}

initiateModels();
