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
        colJumper = Jump.maxIndex( this.jumper.tellSuccessProbMat, rowJumper);
      if(colJumper-1 === this.barrier.length){
        Jump.successUpdate(this.jumper.tellSuccessProbMat,  rowJumper, colJumper);
        Jump.successUpdate(this.speaker.tellSuccessProbMat,  this.speaker.rowSpeaker, this.speaker.colSpeaker);
      } else{
        Jump.failureUpdate(this.jumper.tellSuccessProbMat, rowJumper, colJumper);
        Jump.failureUpdate(this.speaker.tellSuccessProbMat,  this.speaker.rowSpeaker, this.speaker.colSpeaker);
      }
      this.jumper.jump(colJumper+1);
      this.jumper.reset();
    console.log(this.barrier.length+"---"+(colJumper+1));
    console.log(this.barrier.length+"="+(this.jumper.lengthSymbol));
      return [];
    }
  }
});
// Any exogenous event type needs to define a static function "recurrence"
//Jump.priority = 0;

Jump.recurrence = function () {
  return 3;  // better: exponential( 0.5)
};

Jump.print = function (P){
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
};

Jump.normalize = function (P, row) {
  let rowSum = 0;
  let j;
  for (j = 0; j < P[row].length; j++) {
    rowSum = rowSum + P[row][j];
  }
  for (j = 0; j < P[row].length; j++) {
    P[row][j] = P[row][j] / rowSum;
  }
};
Jump.maxIndex = function (P, r) {
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
Jump.successUpdate = function (P, r, c) {
  let row = r - 1, col = c - 1, j;
  //console.log("bou7dha1: "+sim.v.alpha);
  P[row][col] = P[row][col] * (1 + 0.5);//sim.v.alpha);
  //console.log("bou7dha2: "+P[row][col]);
  for (j = 0; j < P[row].length; j++) {
    if (j !== col) {
      P[row][j] = (1 - 0.5/*sim.v.alpha*/) * P[row][j];
    }
  }
  this.normalize(P, row);
  //Jump.print(P);
};
Jump.failureUpdate = function (P, r, c) {
  let row = r - 1, col = c - 1, j;
  //console.log("bou7dha1: "+sim.v.alpha);
  P[row][col] = P[row][col] * (1 - 0.5);
  //console.log("bou7dha2: "+P[row][col]);
  for (j = 0; j < P[row].length; j++) {
    if (j !== col) {
      P[row][j] = (1 + 0.5) * P[row][j];
    }
  }
  this.normalize(P, row);
  //Jump.print(P);
};
