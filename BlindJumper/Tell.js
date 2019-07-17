var Tell = new cLASS({
  Name: "Tell",
  supertypeName: "eVENT",
  shortLabel: "tell",
  properties: {
    "barrier": { range: "Barrier" },
    "speaker": { range: "Speaker" },
    "jumper": { range: "Jumper" }
    //"matrix" : {range: "Matrix3_4"}
  },
  methods: {
    "onEvent": function () {
      //this.barrier.change();
   // if(this.occTime == 1) console.log(this.matrix.print());
      this.jumper.code = this.speaker.defineCode( this.barrier.length );
      return [];
    }
  }
});
// Any exogenous event type needs to define a static function "recurrence"
Tell.priority = 1;

Tell.recurrence = function () {
  return 1;  // better: exponential( 0.5)
};
// Speak.createNextEvent = function () {
//   return new Speak( {
//     occTime: this.occTime + Speak.recurrence(),
//     barrier: this.barrier
//   } );
// };