var Speaker = new cLASS({
  Name: "Speaker",
  supertypeName: "oBJECT",
  properties: {
    "barrier": {range: "Barrier"},
  },
  methods: {
    "defineLengthSymbol": function ( len ) {
      return String.fromCharCode( 64 + len );
    }
  }
});
