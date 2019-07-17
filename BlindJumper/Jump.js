var Jump = new cLASS({
  Name: "Jump",
  supertypeName: "eVENT",
  shortLabel: "jump",
  properties: {
    "barrier": {range: "Barrier"},
    "jumper": {range: "Jumper"},
    "currentJumpRuleStateIndex" : {range:"NonNegativeInteger", initialValue: 0},
    "currentJumpRuleActionIndex" : {range:"NonNegativeInteger", initialValue: 0},
    "jumpSuccessProbMat" : {range: "Matrix3_4"}
  },
  methods: {
    "onEvent": function () {
     var P = [[0.25, 0.25, 0.25], [0.25, 0.25, 0.25], [0.25, 0.25, 0.25]];
      if (this.occTime === 1) {
        //this.jumpSuccessProbMat.print();
        this.jumpSuccessProbMat.normalize(1);
        this.jumpSuccessProbMat.print(P)
        //console.log(Jump.maxIndex(P, 2));
      }
      var row = ((this.jumper.code === "A") ? 1 : ( this.jumper.code === "B") ? 2 : 3);
      this.currentJumpRuleStateIndex = ((this.jumper.code === "A") ? 1 : (this.jumper.code) === "B" ? 2 : 3);
      this.currentJumpRuleActionIndex = ( this.jumpSuccessProbMat.maxIndex( row));
      var jumpLength = this.currentJumpRuleActionIndex+1;
      console.log(this.occTime);

      console.log(jumpLength+", "+this.barrier.length);
      if(jumpLength>this.barrier.length){
        console.log("haha1");
        this.jumpSuccessProbMat.successUpdate(row, jumpLength-1);
      } else{
        console.log("haha2");
        this.jumpSuccessProbMat.failureUpdate(row, jumpLength-1);

      }
      this.jumpSuccessProbMat.print();
      //var x = this.jumper.code;
      return [];
    }
  }
});
// Any exogenous event type needs to define a static function "recurrence"
Jump.priority = 0;

Jump.recurrence = function () {
  return 1;  // better: exponential( 0.5)
};
/*
Jump.print = function (P){
  console.log(P);
  var M = P.length; 	  // number of rows
  var N = P[0].length;    // number of columns
  var i, j;
  for (i = 0; i < M; i++) {
    var outputMess = "";
    for (j = 0; j < N; j++) {
      outputMess += (P[i][j] + " ");
    }
    outputMess += "\n";
  }
  console.log(outputMess);
};

Jump.normalize = function (P, row) {
  var rowSum = 0;
  var j;
  for (j = 0; j < P[row].length; j++) {
    rowSum = rowSum + P[row][j];
  }
  for (j = 0; j < P[row].length; j++) {
    P[row][j] = P[row][j] / rowSum;
  }
};
Jump.maxIndex = function (P, r) {
  var row = r - 1;
  var j, max = 0;
  for (j = 1; j < P[row].length; j++) {
    if (P[row][j] > P[row][max]) {
      max = j;
    }
  }
  return (max + 1);
};
Jump.successUpdate = function (P, r, c) {
  var row = r - 1;
  var col = c - 1;
  var j;
  P[row][col] = P[row][col] * (1 + sim.controller.Global.alpha);
  for (j = 0; j < P[row].length; j++) {
    if (j != col) {
      P[row][j] = (1 - sim.controller.Global.alpha) * P[row][j];
    }
  }
  this.normalize(P, row);
};
Jump.failureUpdate = function (P, r, c) {
  var row = r - 1;
  var col = c - 1;
  var j;
  P[row][col] = P[row][col] * (1 - sim.controller.Global.alpha);
  for (j = 0; j < P[row].length; j++) {
    if (j != col) {
      P[row][j] = (1 + sim.controller.Global.alpha) * P[row][j];
    }
  }
  this.normalize(P, row);
};
*/