var Speaker = new cLASS({
  Name: "Speaker",
  supertypeName: "oBJECT",
  properties: {
    "barrier": {range: "Barrier"},
    "jumpSuccessProbMat" : {range: "Array", initialValue:[[0.33, 0.33, 0.33],
        [0.33, 0.33, 0.33], [0.33, 0.33, 0.33]]},
    rowJumper: {range: "PositiveInteger"},
    colJumper: {range: "PositiveInteger"}

  },
  methods: {
    "defineLengthSymbol": function ( len ) {
      return String.fromCharCode( 64 + len );
    }
  }
});
