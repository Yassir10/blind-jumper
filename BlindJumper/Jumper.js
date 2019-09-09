var Jumper = new cLASS({
  Name: "Jumper",
  supertypeName: "oBJECT",
  properties: {
    "lengthSymbol": {range: "String", initialValue:"A"},
    "jumpLength": {range: "PositiveInteger", initialValue:1},
    "jumpSuccessProbMat" : {range: "Array", initialValue:[[0.25, 0.25, 0.25, 0.25],
        [0.25, 0.25, 0.25, 0.25], [0.25, 0.25, 0.25, 0.25]]},
    "position": {range:"NonNegativeInteger", minValue:0, maxValue:4},
  },
  methods: {
    "jump": function () {
      console.log("length Symbol: "+this.lengthSymbol);
      console.log("Jump length: "+this.jumpLength);
      this.position = this.jumpLength+1;
      console.log("Position: "+ this.position);
    },

    "reset": function(){
      this.position = 0;
    }
  }

});
