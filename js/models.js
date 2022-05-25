var builders = [];

function ARModel(name, dialogue) {
    //we can make name link to the el id to find it on click?
    this.name = name;
    this.dialogue = dialogue;
    

}

ARModel.prototype.speak = function() {
    return this.dialogue;   
}

//Builder model
function Builder(name, dialogue, successDialogue) {
    ARModel.call(this, name, dialogue);
    this.successDialogue = successDialogue;
}

Builder.prototype = Object.create(ARModel.prototype);

function initiateModels() {
    var buildersArray = [
      {
        name: 'CP1',
        dialogue: 'Congratulation! You find Check Point 1',
        successDialogue: 'You had find Check Point 1'
      },
      {
        name: 'CP2',
        dialogue: 'Congratulation! You find Check Point 2',
        successDialogue: 'You had find Check Point 2'
      },
      {
        name: 'CP3',
        dialogue: 'Congratulation! You find Check Point 3',
        successDialogue: 'You had find Check Point 3'
      }
    ];

    buildersArray.forEach(function(builder){
        builders.push(new Builder(builder.name, builder.dialogue, builder.successDialogue));
        });

    console.log('builders', builders);
    
}

initiateModels();
