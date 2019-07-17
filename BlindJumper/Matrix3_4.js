var Matrix3_4;
Matrix3_4 = new cLASS({
  Name: "Matrix3_4",
  supertypeName: "oBJECT",
  properties: {
    "A1": {range: "NonNegativeDouble"},
    "A2": {range: "NonNegativeDouble"},
    "A3": {range: "NonNegativeDouble"},
    "A4": {range: "NonNegativeDouble"},
    "B1": {range: "NonNegativeDouble"},
    "B2": {range: "NonNegativeDouble"},
    "B3": {range: "NonNegativeDouble"},
    "B4": {range: "NonNegativeDouble"},
    "C1": {range: "NonNegativeDouble"},
    "C2": {range: "NonNegativeDouble"},
    "C3": {range: "NonNegativeDouble"},
    "C4": {range: "NonNegativeDouble"}
  },
  methods: {
    "buildMatrix": function () {
      return [[this.A1, this.A2, this.A3, this.A4],
        [this.B1, this.B2, this.B3, this.B4], [this.C1, this.C2, this.C3, this.C4]];
    },
    "setMatrix": function(P){
      this.A1 = P[0][0];
      this.A2 = P[0][1];
      this.A3 = P[0][2];
      this.A4 = P[0][3];
      this.B1 = P[1][0];
      this.B2 = P[1][1];
      this.B3 = P[1][2];
      this.B4 = P[1][3];
      this.C1 = P[2][0];
      this.C2 = P[2][1];
      this.C3 = P[2][2];
      this.C4 = P[2][3];
    },

    "print": function () {
      var P = this.buildMatrix();
      var M = P.length; 	  // number of rows
      var N = P[0].length;    // number of columns
      var i, j;
      var outputMess = "";

      for (i = 0; i < M; i++) {
        for (j = 0; j < N; j++) {
          outputMess += (P[i][j] + " ");
        }
        outputMess += "\n";
      }
      console.log(outputMess);
    },
    "normalize": function (row) {
      var P = this.buildMatrix();
      var rowSum = 0;
      var j;
      for (j = 0; j < P[row].length; j++) {
        rowSum = rowSum + P[row][j];
      }
      for (j = 0; j < P[row].length; j++) {
        P[row][j] = P[row][j] / rowSum;
        console.log(rowSum);
      }
      this.setMatrix(P);
    },
    "maxIndex" : function (r) {
      var P = this.buildMatrix();
      var row = r - 1;
      var j, max = 0;
      for (j = 1; j < P[row].length; j++) {
        if (P[row][j] > P[row][max]) {
          max = j;
        }
      }
      return (max + 1);
    },
    "successUpdate": function (r, c) {
      var P = this.buildMatrix();
      var row = r - 1;
      var col = c - 1;
      var j;
      P[row][col] = P[row][col] * (1 + sim.v.alpha);
      for (j = 0; j < P[row].length; j++) {
        if (j !== col) {
          P[row][j] = (1 - sim.v.alpha) * P[row][j];
        }
      }
      this.normalize(row);
    },
    "failureUpdate": function (r, c) {
      var P = this.buildMatrix();
      var row = r - 1;
      var col = c - 1;
      var j;
      P[row][col] = P[row][col] * (1 - sim.v.alpha);
      for (j = 0; j < P[row].length; j++) {
        if (j !== col) {
          P[row][j] = (1 + sim.v.alpha) * P[row][j];
        }
      }
      this.normalize(row);
    }
  }
});
/*
Matrix3_4.print = function () {
  var P = this.buildMatrix();
  var M = P.length; 	  // number of rows
  var N = P[0].length;    // number of columns
  var i, j;
  for (i = 0; i < M; i++) {
    var outputMess = "";
    for (j = 0; j < N; j++) {
      outputMess += (P[i][j] + ", ");
    }
    simConsole.message(outputMess);
  }
};
Matrix3_4.normalize = function (row) {
  var P = this.buildMatrix();
  var rowSum = 0;
  var j;
  for (j = 0; j < P[row].length; j++) {
    rowSum = rowSum + P[row][j];
  }
  for (j = 0; j < P[row].length; j++) {
    P[row][j] = P[row][j] / rowSum;
  }
};
Matrix3_4.maxIndex = function (r) {
  var P = this.buildMatrix();
  var row = r - 1;
  var j, max = 0;
  for (j = 1; j < P[row].length; j++) {
    if (P[row][j] > P[row][max]) {
      max = j;
    }
  }
  return (max + 1);
};
Matrix3_4.successUpdate = function (r, c) {
  var P = this.buildMatrix();
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
Matrix3_4.failureUpdate = function (r, c) {
  var P = this.buildMatrix();
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






/*
    "print": function () {
      var matrix = buildMatrix();


     /* var M = 3;
      var N = 4;
      var i, j;
      console.log(A1 + ", " + A2 + ", " + A3 + ", " + A4 + "\n" + B1 + ", " + B2 + ", " + B3 + ", " + B4 + "\n" +
          C1 + ", " + C2 + ", " + C3 + ", " + C4 + "\n");
    },
    "normalize": function (row) {
      var rowSum = 0;
      var j;
      if (row === 1) {
        rowSum = A1 + A2 + A3 + A4;
        A1 = A1 / rowSum;
        A2 = A2 / rowSum;
        A3 = A3 / rowSum;
        A4 = A4 / rowSum;
      } else if (row == 2) {
        rowSum = B1 + B2 + B3 + B4;
        B1 = A1 / rowSum;
        B2 = B2 / rowSum;
        B3 = B3 / rowSum;
        B4 = B4 / rowSum;
      } else if (row === 3) {
        rowSum = C1 + C2 + C3 + C4;
        C1 = C1 / rowSum;
        C2 = C2 / rowSum;
        C3 = C3 / rowSum;
        C4 = C4 / rowSum;
      }
    },
    "maxIndex": function (row) {
      var max = 0;
      if (row === 1) {
        if (A2 > A1) {
          max = 1;
        } else if () {
        }
      }
      if (row === 2) {
      }
      if (row === 3) {
      }
      return max + 1;
    },
*/
