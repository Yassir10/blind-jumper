let Jump = new cLASS({
  Name: "Jump",
  supertypeName: "eVENT",
  shortLabel: "jump",
  properties: {
    "barrier": {range: "Barrier"},
    "jumper": {range: "Jumper"},
    "speaker": {range: "Speaker"},
  },
  methods: {
    "onEvent": function () {
      let rowJumper = ((this.jumper.lengthSymbol === "A") ? 1 : (this.jumper.lengthSymbol === "B") ? 2 : 3),
        colJumper = this.jumper.jumpSuccessProbMat.maxColIndex( rowJumper),
      audio_failure = new Audio(sim.config.audioFolder+"69338__timtube__crowd-yay.mp3"),
      audio_success = new Audio(sim.config.audioFolder+"99636__tomlija__small-crowd-yelling-yeah.mp3");
      if(colJumper-1 >= this.barrier.length){
        this.jumper.jumpSuccessProbMat.learnSuccess( rowJumper, colJumper, sim.v.alpha);
        this.speaker.tellSuccessProbMat.learnSuccess( this.speaker.rowSpeaker, this.speaker.colSpeaker, sim.v.alpha);
         audio_success.play();
         sim.stat.jumpSuccess++;
    } else{
        this.jumper.jumpSuccessProbMat.learnFailure( rowJumper, colJumper, sim.v.alpha);
        this.speaker.tellSuccessProbMat.learnFailure( this.speaker.rowSpeaker, this.speaker.colSpeaker, sim.v.alpha);
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
