class LearningMatrix extends Array {
  constructor( m) {
    super(m);
  }
  normalize( row) {
    let P = this[0], rowSum = 0, j;
    for (j = 0; j < P[row].length; j++) {
      rowSum = rowSum + P[row][j];
    }
    for (j = 0; j < P[row].length; j++) {
      P[row][j] = P[row][j] / rowSum;
      P[row][j] = (Math.floor(P[row][j]*100))/100;

    }
  }
  maxColIndex( r) {
    let P = this[0], row = r - 1, j, max = 0;
    for (j = 1; j < P[row].length; j++) {
      if (P[row][j] > P[row][max]) {
        max = j;
      }
    }
    return (max + 1);
  }
  learnSuccess( r, c, alpha) {
    let row = r - 1, col = c - 1, j, P = this[0];
    P[row][col] = P[row][col] * (1 + alpha);//);
    for (j = 0; j < P[row].length; j++) {
      if (j !== col) {
        P[row][j] = (1 - alpha) * P[row][j];
      }
    }
    this.normalize(row);
    this.print();
  }
  learnFailure( r, c, alpha) {  // instead of "failureUpdate"
    let row = r - 1, col = c - 1, j, P = this[0];
    P[row][col] = P[row][col] * (1 - alpha);
    for (j = 0; j < P[row].length; j++) {
      if (j !== col) {
        P[row][j] = (1 + alpha) * P[row][j]
      }
    }
    this.normalize(row);
    this.print();
  }
  print(){
    let P = this[0], M = P.length, N = P[0].length, i, j, outputMess = "";
    for (i = 0; i < M; i++) {
      for (j = 0; j < N; j++) {
        outputMess += (P[i][j] + " ");
      }
      outputMess += "\n";
    }
    console.log(outputMess);
  }

  toString(){
    let P = this[0], M = P.length, N = P[0].length, i, j, outputMess = [];
    for (i = 0; i < M; i++) {
      for (j = 0; j < N; j++) {
        outputMess+= (P[i][j] + " ");
      }
      outputMess += "\n";
    }
    return outputMess;
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
      this.speaker.colSpeaker = this.speaker.tellSuccessProbMat.maxColIndex( this.speaker.rowSpeaker);
      this.jumper.lengthSymbol =
          ((this.speaker.colSpeaker === 1 ) ? "A" : (this.speaker.colSpeaker === 2) ? "B" : "C");
      return [];
    }
  }
});

Tell.recurrence = function () {
  return 3;
};