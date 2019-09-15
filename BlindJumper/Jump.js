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
      let rowJumper =  {"A":1,"B":2,"C":3}[this.jumper.receivedLengthSymbol],  // map "A","B","C" to 1,2,3
          colJumper = this.jumper.learnMatrix.maxColIndex( rowJumper),
          audio_failure = new Audio(sim.config.audioFolder+"69338__timtube__crowd-yay.mp3"),
          audio_success = new Audio(sim.config.audioFolder+"99636__tomlija__small-crowd-yelling-yeah.mp3");
	        this.jumpLength = colJumper;
      this.jumper.position += this.jumpLength;
      if (this.jumpLength === this.barrier.length + 1){
        this.jumper.learnMatrix.learnSuccess( rowJumper, colJumper, sim.v.alpha);
        this.speaker.learnMatrix.learnSuccess( this.speaker.rowSpeaker, this.speaker.colSpeaker, sim.v.alpha);
        audio_success.play();
        sim.stat.jumpSuccess++;

      } else{
        this.jumper.learnMatrix.learnFailure( rowJumper, colJumper, sim.v.alpha);
        this.speaker.learnMatrix.learnFailure( this.speaker.rowSpeaker, this.speaker.colSpeaker, sim.v.alpha);
        audio_failure.play();
        sim.stat.jumpFailure++;
      }
      this.jumper.jump(colJumper+1);
      return [];
    }
  }
});


Jump.recurrence = function () {
  return 3;
};
