var Jumper = new cLASS({
  Name: "Jumper",
  supertypeName: "oBJECT",
  properties: {
    "position": {range:"NonNegativeInteger", minValue:0, maxValue:6, shortLabel: "pos"},
    "receivedLengthSymbol": {range: "String", initialValue:"A"},
    "learnMatrix" : {range: Array, initialValue:
          [[0.25, 0.25, 0.25, 0.25], [0.25, 0.25, 0.25, 0.25],
            [0.25, 0.25, 0.25, 0.25]]}
  },
  methods: {
    "jump": function ( jumpLength) {
      this.position = jumpLength;  // 1,2,3, 4
      sim.stat.jumpsNumber++;
    },

    "reset": function(){
      this.position = 0;
    }
  }

});
