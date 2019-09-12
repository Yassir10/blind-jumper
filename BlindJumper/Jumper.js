var Jumper = new cLASS({
  Name: "Jumper",
  supertypeName: "oBJECT",
  properties: {
    "lengthSymbol": {range: "String", initialValue:"A"},
    "jumpSuccessProbMat" : {range: Array, initialValue:
          [[0.25, 0.25, 0.25, 0.25], [0.25, 0.25, 0.25, 0.25],
            [0.25, 0.25, 0.25, 0.25]]},
    "position": {range:"NonNegativeInteger", minValue:0, maxValue:6, shortLabel: "pos"},

  },
  methods: {
    "jump": function ( jumpLength) {
      this.position = jumpLength;  // 1,2,3,4,5
    },

    "reset": function(){
      this.position = 0;
    }
  }

});
