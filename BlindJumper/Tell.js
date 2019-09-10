class LearningMatrix extends Array {
  constructor( m) {
    super(m);
    //this = m;
  }
  normalize( row) {
    var P = this[0];
    console.log(row);
    console.log(P[1]);
    let rowSum = 0;
    let j;
    for (j = 0; j < P[row].length; j++) {
      rowSum = rowSum + P[row][j];
    }
    for (j = 0; j < P[row].length; j++) {
      P[row][j] = P[row][j] / rowSum;
    }
  }

  maxColIndex( r) {
    var P = this[0];
    let row = r - 1;
    let j, max = 0;
    for (j = 1; j < P[row].length; j++) {
      if (P[row][j] > P[row][max]) {
        max = j;
      }
    }
    //console.log("maximum: "+(max+1));
    return (max + 1);
  }

  learnSuccess( r, c) {
    let row = r - 1, col = c - 1, j, P = this[0];;
    P[row][col] = P[row][col] * (1 + 0.5);//sim.v.alpha);
    for (j = 0; j < P[row].length; j++) {
      if (j !== col) {
        P[row][j] = (1 - 0.5/*sim.v.alpha*/) * P[row][j];
      }
    }
    this.normalize(row);
  }

  learnFailure( r, c) {  // instead of "failureUpdate"
    let row = r - 1, col = c - 1, j, P = this[0];
    P[row][col] = P[row][col] * (1 - 0.5);
    for (j = 0; j < P[row].length; j++) {
      if (j !== col) {
        P[row][j] = (1 + 0.5) * P[row][j];
      }
    }
    this.normalize(row);
    //Jump.print(P);
  }


  print(){
    var P = this[0];
    let M = P.length; 	  // number of rows
    let N = P[0].length;    // number of columns
    let i, j;
    let outputMess = "";
    for (i = 0; i < M; i++) {
      for (j = 0; j < N; j++) {
        outputMess += (P[i][j] + " ");
      }
      outputMess += "\n";
    }
    console.log(outputMess);
  }

}

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
      this.speaker.rowSpeaker = this.speaker.barrier.length;
      this.speaker.colSpeaker = Tell.maxIndex(this.speaker.tellSuccessProbMat, this.speaker.rowSpeaker);
      this.jumper.lengthSymbol =
          ((this.speaker.colSpeaker === 1 ) ? "A" : (this.speaker.colSpeaker === 2) ? "B" : "C");
      return [];
    }
  }
});
// Any exogenous event type needs to define a static function "recurrence"
//Tell.priority = 1;

Tell.recurrence = function () {
  return 3;  // better: exponential( 0.5)
};

Tell.maxIndex = function (P, r) {
  let row = r - 1;
  let j, max = 0;
  for (j = 1; j < P[row].length; j++) {
    if (P[row][j] > P[row][max]) {
      max = j;
    }
  }
  //console.log("maximum: "+(max+1));
  return (max + 1);
};


