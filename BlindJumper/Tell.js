var Tell = new cLASS({
  Name: "Tell",
  supertypeName: "eVENT",
  shortLabel: "tell",
  properties: {
    "lengthSymbol": { range: "PositiveInteger" },
    "speaker": { range: "Speaker" },
    "jumper": { range: "Jumper" }
  },
  methods: {
    "onEvent": function () {
      this.speaker.rowSpeaker = this.speaker.barrier.length;
      this.speaker.colSpeaker = Jump.maxIndex(this.speaker.jumpSuccessProbMat, this.speaker.rowSpeaker);

      this.jumper.lengthSymbol =
          ((this.speaker.colSpeaker === 1 ) ? "A" : (this.speaker.colSpeaker === 2) ? "B" : "C");

      //this.jumper.lengthSymbol = this.speaker.defineLengthSymbol(this.speaker.colSpeaker );
      return [];
    }
  }
});
// Any exogenous event type needs to define a static function "recurrence"
Tell.priority = 1;

Tell.recurrence = function () {
  return 1;  // better: exponential( 0.5)
};
