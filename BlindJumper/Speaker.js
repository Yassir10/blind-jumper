var Speaker = new cLASS({
  Name: "Speaker",
  supertypeName: "oBJECT",
  properties: {
    "barrier": { range: "Barrier" }
  },
  methods: {
    "defineCode": function ( len ) {
      return String.fromCharCode( 65 + len );
    }
  }
});
