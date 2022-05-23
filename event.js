AFRAME.registerComponent('cursor-listener', {
    init: function () {
    this.el.addEventListener('click', function (evt) {
      alert("testing");
      });
    }
    });