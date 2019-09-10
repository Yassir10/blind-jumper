var Jumper = new cLASS({
  Name: "Jumper",
  supertypeName: "oBJECT",
  properties: {
    "lengthSymbol": {range: "String", initialValue:"A"},
<<<<<<< HEAD
    //"jumpLength": {range: "PositiveInteger"},
    /*"jumpSuccessProbMat" : {range: Array, initialValue:
          new LearningMatrix(new Array(new Array(0.25,0.25,0.25,0.25),
          new Array(0.25,0.25,0.25,0.25), new Array(0.25,0.25,0.25,0.25)))},*/
    "tellSuccessProbMat" : {range: "Array", initialValue: [[0.25, 0.25, 0.25, 0.25], [0.25, 0.25, 0.25, 0.25],
        [0.25, 0.25, 0.25, 0.25]]},
    "position": {range:"PositiveInteger", minValue:0, maxValue:5},
=======
    "jumpLength": {range: "PositiveInteger", initialValue:1},
    "jumpSuccessProbMat" : {range: "Array", initialValue:[[0.25, 0.25, 0.25, 0.25],
        [0.25, 0.25, 0.25, 0.25], [0.25, 0.25, 0.25, 0.25]]},
    "position": {range:"PositiveInteger", minValue:1, maxValue:5, shortLabel: "pos"},
>>>>>>> 1bfdb08bfcf7cba120989c2389d846b65b0c8210
  },
  methods: {
    "jump": function ( jumpLength) {
      this.position = jumpLength;
    },

    "reset": function(){
      this.position = 1;
    }
  }

});
