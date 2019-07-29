var Tell = new cLASS({
  Name: "Tell",
  supertypeName: "eVENT",
  shortLabel: "tell",
  properties: {
    "speaker": { range: "Speaker" },
    "jumper": { range: "Jumper" }
  },
  methods: {
    "onEvent": function () {
      this.jumper.lengthSymbol = this.speaker.defineLengthSymbol( this.speaker.barrier.length);//colSpeaker );
      return [];
    }
  }
});
// Any exogenous event type needs to define a static function "recurrence"
Tell.priority = 1;

Tell.recurrence = function () {
  return 3;  // better: exponential( 0.5)
};
