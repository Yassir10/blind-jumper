var Jumper = new cLASS({
  Name: "Jumper",
  supertypeName: "oBJECT",
  properties: {
    "lengthSymbol": {range: "String", initialValue:"A"},
    "jumpLength": {range: "PositiveInteger", initialValue:1},
    "jumpSuccessProbMat" : {range: "Array", initialValue:[[0.25, 0.25, 0.25, 0.25],
        [0.25, 0.25, 0.25, 0.25], [0.25, 0.25, 0.25, 0.25]]},
    "position": {range:"PositiveInteger", minValue:1, maxValue:5, shortLabel: "pos"},
  },
  methods: {
    "jump": function () {
      this.position = this.jumpLength;
    },

    "reset": function(){
      this.position = 1;
    }
  }

});
