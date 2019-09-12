var Jump = new cLASS({
  Name: "Jump",
  supertypeName: "eVENT",
  shortLabel: "jump",
  properties: {
    "barrier": {range: "Barrier"},
    "jumper": {range: "Jumper"},
    "speaker": {range: "Speaker"},
	"jumpLength": {range: "PositiveInteger", min:2, max:4, shortLabel: "len"}
  },
  methods: {
    "onEvent": function () {
      var rowJumper =  {"A":1,"B":2,"C":3}[this.jumper.receivedLengthSymbol],  // map "A","B","C" to 1,2,3
          colJumper = this.jumper.learnMatrix.maxColIndex( rowJumper);
	  this.jumpLength = colJumper;
      this.jumper.position += this.jumpLength;
      if (this.jumpLength === this.barrier.length + 1){
        this.jumper.learnMatrix.learnSuccess( rowJumper, colJumper, sim.v.alpha);
        this.speaker.learnMatrix.learnSuccess( this.speaker.rowSpeaker, this.speaker.colSpeaker, sim.v.alpha);
      } else{
        this.jumper.learnMatrix.learnFailure( rowJumper, colJumper, sim.v.alpha);
        this.speaker.learnMatrix.learnFailure( this.speaker.rowSpeaker, this.speaker.colSpeaker, sim.v.alpha);
      }
      return [];
    }
  }
});


Jump.recurrence = function () {
  return 3;
};
