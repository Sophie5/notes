(function(exports) {

  function Note(string){
    this.text = string
  };

  Note.prototype.showText = function(){
    return this.text;
  };

  exports.Note = Note;

})(this);
